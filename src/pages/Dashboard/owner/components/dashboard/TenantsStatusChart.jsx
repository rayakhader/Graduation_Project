import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const TenantsStatusChart = ({ tenantsWithIncompletedPayments }) => {
  const incompletePayments = Number(tenantsWithIncompletedPayments);
  const completedPayments = 100 - incompletePayments;

  const data = {
    labels: ['Completed Payments', 'Incompleted Payments'],
    datasets: [
      {
        data: [
          completedPayments,
          incompletePayments,
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
        text: 'Tenants Payment Status',
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
  };

  return <Pie data={data} options={options} />;
};

export default TenantsStatusChart;
