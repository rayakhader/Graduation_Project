import React, { useEffect, useState } from 'react';
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';
import axios from 'axios';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const defaultCenter = {
  lat: 31.9474,
  lng: 35.2272,
};

const customMarkerIcon = 'https://cdn-icons-png.flaticon.com/256/684/684908.png';
const libraries = ['marker'];  

const mapId = '692e8532568262c';  

function MyComponent({city}) {
  const [location, setLocation] = useState(null);
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDYxzZCpfyaKoPG7cdtuw8CzqNLBOuoXxQ",
    libraries,
  });

  useEffect(() => {
    const fetchCoordinates = async (cityName) => {
      try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
          params: {
            address: cityName,
            key: "AIzaSyDYxzZCpfyaKoPG7cdtuw8CzqNLBOuoXxQ",
          },
        });

        if (response.data.status === 'OK') {
          const location = response.data.results[0].geometry.location;
          setLocation({ name: cityName, lat: location.lat, lng: location.lng });
        } else {
          console.error('Geocoding API error:', response.data.status, response.data.error_message);
        }
      } catch (error) {
        console.error('Error fetching coordinates:', error);
      }
    };

    if (isLoaded && city) {
      fetchCoordinates(city);
    }
  }, [isLoaded, city]);

  useEffect(() => {
    if (isLoaded && window.google && location) {
      const content = document.createElement('div');
      const img = document.createElement('img');
      img.src = customMarkerIcon;
      img.style.width = '32px';
      img.style.height = '32px';
      img.alt = location.name;
      content.appendChild(img);

      new window.google.maps.marker.AdvancedMarkerElement({
        position: { lat: location.lat, lng: location.lng },
        map: window.map,
        title: location.name,
        content,
      });
    }
  }, [isLoaded, location]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location ? { lat: location.lat, lng: location.lng } : defaultCenter}
      zoom={10}
      options={{ mapId }} 
      onLoad={map => (window.map = map)}
    />
  );
}

export default React.memo(MyComponent);
