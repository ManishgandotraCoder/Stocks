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
import {Col , Row} from "antd"
import './coin.scss'
import * as colors from "../../commonscss/color"
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const color = colors.default.darker
export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [21,4,11,54],
      borderColor: {color},
      backgroundColor: '#000',
    }
  ],
};

export default function Coin() {
  return <>
  <Row className='name'>
    <Col span={8}>

    </Col>
    <Col span={16}>
     <Line options={options} data={data} />;
    </Col>
  </Row>
  </>;
}
