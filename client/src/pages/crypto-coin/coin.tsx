import { useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Col, Row } from "antd";
import "./coin.scss";
import * as coiner from "../../constants/ether"
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    }
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: [32, 53, 32, 45],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function Coin() {
  useEffect(() => {
    console.log(coiner.default.market_data?.current_price?.usd);

  }, [])
  return <Row className='name'>
    <img src={coiner.default.image.small} /> <span className='head'>#{coiner.default.coingecko_rank} {coiner.default.name}</span>
    <br />
    <span>{coiner.default.description.en}</span>
    <Col span={8}>
    <div className='name'>
    <span>Current Price : ${coiner.default.market_data?.current_price?.usd}</span><br/>
    <span>Market CAP : ${coiner.default.market_data?.market_cap?.usd}</span><br/>
    <span>High 24h : ${coiner.default.market_data?.high_24h?.usd}</span><br/>
    <span>Low 24h : ${coiner.default.market_data?.low_24h?.usd}</span>

    
  </div>

    </Col>
    <Col span={16}>
      <Line options={options} data={data} />
    </Col>
  </Row>

}
