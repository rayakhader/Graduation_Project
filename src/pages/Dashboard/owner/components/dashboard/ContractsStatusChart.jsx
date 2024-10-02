import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const ContractsStatusChart = ({ terminatedContracts, notTerminatedContracts }) => {
  const data = {
    labels: ['Terminated', 'Not Terminated'],
    datasets: [
      {
        label: ['Number of Contracts'],
        data: [terminatedContracts, notTerminatedContracts],
        backgroundColor: ['#1976d2', '#f5a9c9'], 
        hoverBackgroundColor: ['#1565c0', '#FF6384'], 
        borderWidth: 1,
        barThickness: 80,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Contracts Status',
      },
      datalabels: {
        color: 'white',
        anchor: 'center',
        align: 'center',
        font: {
          weight: 'bold',
        },
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ContractsStatusChart;
