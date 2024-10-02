import React from 'react';
import { Pie } from 'react-chartjs-2';

function NotificationsPieChart({ readNotifications, unreadNotifications }) {
  const totalNotifications = readNotifications + unreadNotifications
  const data = {
    labels: ['Read Notifications', 'Unread Notifications'],
    datasets: [
      {
        data: [(readNotifications/totalNotifications)*100, (unreadNotifications/totalNotifications)*100],
        backgroundColor: ['#1976d2', '#f5a9c9'], 
        hoverBackgroundColor: ['#1565c0', '#FF6384'], 
      }
    ]
  };
  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Notifications Status',
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

  return <Pie data={data} options={options}/>;
}

export default NotificationsPieChart;
