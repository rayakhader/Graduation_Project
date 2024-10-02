import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const FavoritePercentageChart = ({ apartments, favoritesList }) => {
  const totalApartments = apartments;

  const favoriteCount = favoritesList;
  const nonFavoriteCount = totalApartments - favoriteCount;

  const data = {
    labels: ['Favorite Apartments', 'Not Favorite Apartments'],
    datasets: [
      {
        data: [
          (favoriteCount / totalApartments) * 100,
          (nonFavoriteCount / totalApartments) * 100,
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
        text: 'Favorite Apartments Percentage',
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
    cutout: '50%', 
  };

  return <Doughnut data={data} options={options} />;
};

export default FavoritePercentageChart;
