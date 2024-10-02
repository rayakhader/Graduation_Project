import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, DoughnutController, ArcElement, Tooltip, Legend);

const ApartmentsCitiesChart = ({ citiesList }) => {
    const data = {
        labels: citiesList.map(city => city.name),
        datasets: [{
            label: 'Number of Apartments',
            data: citiesList.map(city => city.numberOfApartments),
            backgroundColor: [
                '#f5a9c9', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', // Add more colors as needed
            ],
            hoverBackgroundColor: [
                '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', // Add more colors as needed
            ],
        }]
    };

    return (
        <Doughnut data={data} options={{
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Apartments Distribution by City'
                }
            }
        }} />
    );
};

export default ApartmentsCitiesChart;
