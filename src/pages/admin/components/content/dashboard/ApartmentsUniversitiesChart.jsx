import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ApartmentsUniversitiesChart = ({ universitiesList }) => {
    const data = {
        labels: universitiesList.map(university => university.name),
        datasets: [{
            label: 'Number of Apartments',
            data: universitiesList.map(university => university.numberOfApartments),
            backgroundColor: '#f5a9c9',
            borderWidth: 1,
            barThickness: 80
        }]
    };

    return (
        <Bar
            data={data}
            options={{
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Number of Apartments'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Universities'
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Apartments Distribution by University'
                    }
                }
            }}
        />
    );
};

export default ApartmentsUniversitiesChart;
