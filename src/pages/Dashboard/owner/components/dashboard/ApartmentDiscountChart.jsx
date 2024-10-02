import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(LinearScale, CategoryScale, BarElement, Title, Tooltip, Legend);

const ApartmentDiscountChart = ({ apartmentData }) => {
  const maxLength = 15; 
  const truncatedLabels = apartmentData.map((apartment) => {
    const name = apartment.apartmentName;
    return name.length > maxLength ? name.slice(0, maxLength) + '...' : name; 
  });

  const data = {
    labels: truncatedLabels, 
    datasets: [
      {
        label: 'Number of Discounts',
        data: apartmentData.map((apartment) => apartment.discountsCount),
        backgroundColor: '#f5a9c9',
        barThickness: 80,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          title: (tooltipItems) => {
            return apartmentData[tooltipItems[0].dataIndex].apartmentName;
          },
        },
      },
      datalabels: {
        display: false,
      },
      title: {
        display: true,
        text: 'Apartment Discounts',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Apartment Name',
        },
        ticks: {
          maxRotation: 90, 
          minRotation: 90,
        },
      },
      y: { title: {
        display: true,
        text: 'Number of Discounts',
      },
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ApartmentDiscountChart;
