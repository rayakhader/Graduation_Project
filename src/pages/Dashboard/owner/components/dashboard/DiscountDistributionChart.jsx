import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import the plugin

// Register necessary components and plugins
ChartJS.register(ArcElement, RadialLinearScale, Tooltip, Legend, ChartDataLabels);

const DiscountDistributionChart = ({ addedDiscounts, notAddedDiscounts }) => {
  const totalDiscounts = addedDiscounts + notAddedDiscounts;

  const data = {
    labels: ['Added Discounts', 'Not added Discounts'],
    datasets: [
      {
        data: [
          (addedDiscounts/ totalDiscounts) * 100,
          (notAddedDiscounts/ totalDiscounts) * 100,
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
        position: 'bottom', // Position the legend
      },
      title: {
        display: true,
        text: 'Discounts Status',
      },
      datalabels: {
        display: true, // Enable data labels
        formatter: (value) => `${value.toFixed(1)}%`, // Display percentage with one decimal place
        color: 'white', // Label color for contrast
        anchor: 'center', // Center the label on the segment
        align: 'center', // Align within the segment
        font: {
          weight: 'bold', // Bold font for visibility
        },
      },
    },
    scales: {
      r: {
        beginAtZero: true, // Start from zero on radial scale
      },
    },
  };

  return <PolarArea data={data} options={options} />;
};

export default DiscountDistributionChart;
