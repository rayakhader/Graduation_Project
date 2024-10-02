import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; 
ChartJS.register(ArcElement, Tooltip, Legend,ChartDataLabels);

const ApartmentAvailabilityChart = ({ availableApartments, notAvailableApartments }) => {
  const totalApartments = availableApartments.length + notAvailableApartments.length;

  const data = {
    labels: ['Available Apartments', 'Not Available Apartments'],
    datasets: [
      {
        data: [
          (availableApartments.length / totalApartments) * 100,
          (notAvailableApartments.length / totalApartments) * 100,
        ],
        backgroundColor: ['#1976d2', '#f5a9c9'], 
        hoverBackgroundColor: ['#1565c0', '#FF6384'], 
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Apartments Availability',
      },
      datalabels: {
        display: true, 
        formatter: (value) => `${value.toFixed(1)}%`, 
        color: 'white',
        anchor: 'center', 
        align: 'center', 
        font: {
          weight: 'bold', 
        },
      },
    },
    cutout: '40%', 
  };
  return <Doughnut data={data} options={options} />;
};

export default ApartmentAvailabilityChart;
