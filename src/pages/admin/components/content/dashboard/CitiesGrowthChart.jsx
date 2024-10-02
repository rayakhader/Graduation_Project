// CitiesGrowthChart.jsx
import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CitiesGrowthChart = ({ citiesList }) => {
    // Use useMemo to calculate the dates and counts only when citiesList changes
    const { dates, counts } = useMemo(() => {
        const last10Days = Array.from({ length: 7 }, (_, i) => {
            const d = new Date();
            d.setDate(d.getDate() - i);
            return d.toISOString().split('T')[0];  // Format YYYY-MM-DD
        }).reverse();

        const dateCounts = last10Days.map(date => 
            citiesList.filter(city => city.creationDate.startsWith(date)).length
        );

        return { dates: last10Days, counts: dateCounts };
    }, [citiesList]);

    const chartData = {
        labels: dates,
        datasets: [
            {
                label: 'Number of Cities Added',
                data: counts,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                // fill: true,
                tension: 0.4 // This makes the line curved
            }
        ]
    };

    return <Line data={chartData} />;
};

export default CitiesGrowthChart;