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
import { Col, Row, Breadcrumb, Spin, Radio } from "antd";
import "./coin.scss";
import axios from "axios"
import { useParams } from 'react-router-dom';
import * as colors from "../../commonscss/color"
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
  elements: {
    point: {
      radius: 1,
    },
  },
};

export default function Coin() {
  const chartColor = colors.default.darker
  const typeCoininfo: any = {}
  const [historicData, setHistoricData] = useState(typeCoininfo);
  const [coinInfo, setCoinInfo] = useState(typeCoininfo);
  const [loader, setLoader] = useState(true)
  const [day, setDay] = useState(1)
  const [typegraph, setTypegraph] = useState('prices')
  let { coin } = useParams();

  async function getData(day: Number) {
    setLoader(true)
    const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${'usd'}&days=${day}`);
    setHistoricData(data);
    setLoader(false)


  }
  async function getCoinInfo() {
    const info = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin}`);
    setCoinInfo(info.data)
  }

  useEffect(() => {
    getData(1);
    getCoinInfo();
  }, []);

  function onRadioChange(e: any) {
    getData(e);
    setDay(+e)
  }
  async function onRadioTypeChange(e: any) {
    await setTypegraph(e)
  }
  return <>
    <Breadcrumb className="breadcrumb">

      <Breadcrumb.Item>
        <a href="/crypto">Crypto Currency</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="/">{coinInfo.name}</a>
      </Breadcrumb.Item>
    </Breadcrumb>
    <Row className='name'>

      <>

        <Col span={6}>
          <div>
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

          <Radio.Group value={typegraph} buttonStyle="solid" onChange={(event: any) => onRadioTypeChange(event.target.value)}>
            <Radio.Button value={"prices"}>Price</Radio.Button>
            <Radio.Button value={"market_caps"}>Market Cap</Radio.Button>
            <Radio.Button value={"total_volumes"}>Total Volumes</Radio.Button>
          </Radio.Group>

          <Radio.Group value={day} buttonStyle="solid" onChange={(event: any) => onRadioChange(event.target.value)} className="fr">
            <Radio.Button value={1}>24h</Radio.Button>
            <Radio.Button value={7}>7d</Radio.Button>
            <Radio.Button value={14}>14d</Radio.Button>
            <Radio.Button value={30}>30d</Radio.Button>
            <Radio.Button value={90}>90d</Radio.Button>
            <Radio.Button value={180}>180d</Radio.Button>
            <Radio.Button value={365}>1y</Radio.Button>
          </Radio.Group>
          {loader ?
            <Spin tip="Loading" size="large" className='spin'>
              <div className="content" />
            </Spin> :

            <Line options={options}
              data={{
                labels: historicData[typegraph].map((coin: any) => {
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
                    data: historicData[typegraph].map((coin: any) => coin[1]),
                    label: `Price ( Past ${day} Days ) in ${'usd'}`,
                    borderColor: "#e86b6b",
                  },
                ],
              }}
            />}       </Col>
      </>

    </Row>


  </>


}
