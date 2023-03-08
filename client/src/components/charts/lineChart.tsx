import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
);

const options = {
    responsive: true,
    height: "40vh",
    legend: {
        display: false
    },
    interaction: {
        mode: 'index' as const,
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
            display: false,
            text: 'Chart.js Line Chart - Multi Axis',
        },
    },
    scales: {
        y: {
            type: 'linear' as const,
            display: false,
            position: 'left' as const,

        },
        x: {
            display: false,
        },

    }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data: any = {
    labels,
    datasets: [

        {
            label: 'Dataset 2',
            display: false,
            data: [3, 54, 123, 35],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            yAxisID: 'y',
        },
    ],
};

export default function LineChart() {
    return <Line options={options} width={10}  height={5} data={data} />;
}
