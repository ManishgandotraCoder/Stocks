import { useEffect, useState } from 'react';
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
import { Col, Row, Tabs } from "antd";
import "./coin.scss";
import axios from "axios"
import { useParams } from 'react-router-dom';
const { TabPane } = Tabs;

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
  events: [],
  showTooltips: false,

  plugins: {
    legend: {
      position: 'top' as const,
    }
  },
};

const timer = [
  { title: '24 Hours', days: 1 },
  { title: '30 Days', days: 30 },
  { title: '3 Months', days: 90 },
  { title: '1 Year', days: 365 }
]
export default function Coin() {
  const typeCoininfo: any = {}
  const [historicData, setHistoricData] = useState([]);
  const [coinInfo, setCoinInfo] = useState(typeCoininfo);
  const [graphTime, setGraphTime] = useState(1);
  let { coin } = useParams();

  async function getData() {
    const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${'usd'}&days=${graphTime}`);
    const info = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin}`);
    setHistoricData(data.prices);
    setCoinInfo(info.data)
  }

  useEffect(() => {
    getData();
  }, []);
  function onTabChange(e: any) {

    if (e === "3 Months") {
      setGraphTime(90)
    } else if (e === "1 Year") {
      setGraphTime(365)
    } else if (e === "30 Days") {
      setGraphTime(30)
    } else {
      setGraphTime(1)
    }
    getData()
  }
  return <>
    <Row className='name'>
      <Col span={6}>
        <div className='name'>
          <center>
            <img className='image' src={coinInfo?.image?.large} />
            <br />
            <span className='head'>#{coinInfo.coingecko_rank} {coinInfo.name}</span>
            <br />

          </center>
          <span>{coinInfo?.description?.en.split('.')[0]}</span><br />
          <span>Current Price : ${coinInfo?.market_data?.current_price?.usd}</span><br />
          <span>Market CAP : ${coinInfo?.market_data?.market_cap?.usd}</span><br />
          <span>High 24h : ${coinInfo?.market_data?.high_24h?.usd}</span><br />
          <span>Low 24h : ${coinInfo?.market_data?.low_24h?.usd}</span>

        </div>

      </Col>
      <Col span={18}>
        <Tabs onChange={onTabChange}>
          {timer.map(item =>
            <TabPane tab={item.title} key={item.title}>
              <Line options={options}
                data={{
                  labels: historicData.map((coin) => {
                    let date = new Date(coin[0]);
                    let time =
                      date.getHours() > 12
                        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                        : `${date.getHours()}:${date.getMinutes()} AM`;
                    // return days === 1 ? time : date.toLocaleDateString();
                    return date.toLocaleDateString()
                  }),

                  datasets: [
                    {
                      data: historicData.map((coin) => coin[1]),
                      label: `Price ( Past ${365} Days ) in ${'usd'}`,
                      borderColor: 'rgb(53, 162, 235)',
                      // backgroundColor: 'rgba(53, 162, 235, 0.5)',
                      hoverBackgroundColor: 'red',
                      hoverBorderColor: 'blue',

                    },
                  ],
                }}
              />
            </TabPane>)}

        </Tabs>
      </Col>
    </Row>


  </>


}
