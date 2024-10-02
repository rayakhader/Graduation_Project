import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const NotificationsBarChart = ({ readNotifications, unreadNotifications }) => {
  const data = {
    labels: ['Read Notifications', 'Unread Notifications'],
    datasets: [
      {
        label: 'Notifications',
        data: [readNotifications, unreadNotifications],
        backgroundColor: ['#1976d2', '#f5a9c9'], 
        hoverBackgroundColor: ['#1565c0', '#FF6384'],
        borderWidth: 1,
        barThickness: 80,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: 'Notifications Status',
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
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default NotificationsBarChart;
