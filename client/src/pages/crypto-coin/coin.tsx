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
import { Col, Row, Radio } from "antd";
import "./coin.scss";
import { useParams } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Progress from '../../components/progressbar/progress';
import * as CryptoActions from "./../../redux/actions/crypto.actions"
import { useDispatch, useSelector } from 'react-redux';

var type = 'Bar'

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
  const [loader, setLoader] = useState(true)
  const [day, setDay] = useState(1)
  const [typegraph, setTypegraph] = useState('prices')

  const dispatch = useDispatch()
  const graph: any = useSelector((user: any) => user.crypto)
  const { coin } = useParams();

  async function getData(day: Number) {
    setLoader(true)
    dispatch(await CryptoActions.getCoinGraph(coin + '', 'usd', day))
    setLoader(false)
  }
  async function getCoinInfo() {
    dispatch(await CryptoActions.getCoinDetails(coin + ''))

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

    <Row className='name'>

      <>

        <Col span={6}>

          <CardContent>
            <img className='image' src={graph?.crypto_coin_details?.image?.large} />
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              <span className='head'>#{graph?.crypto_coin_details?.coingecko_rank} {graph?.crypto_coin_details?.name}</span>
            </Typography>
            <Typography sx={{ fontSize: 17 }} variant="h5" component="div">
              <span>Current Price : ${graph?.crypto_coin_details?.market_data?.current_price?.usd}</span>
            </Typography>
            <Typography sx={{ fontSize: 17 }} variant="h5" component="div">
              <span>Market CAP : ${graph?.crypto_coin_details?.market_data?.market_cap?.usd}</span><br />
            </Typography>
            <Typography sx={{ fontSize: 17 }} variant="h5" component="div">
              <span>High 24h : ${graph?.crypto_coin_details?.market_data?.high_24h?.usd}</span><br />
            </Typography>
            <Typography sx={{ fontSize: 17 }} variant="h5" component="div">
              <span>Low 24h : ${graph?.crypto_coin_details?.market_data?.low_24h?.usd}</span>
            </Typography>
          </CardContent>

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
            <Progress /> :
            <Line options={options}
              data={{
                labels: graph.crypto_graph_details?.[typegraph].map((coin: any) => {
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
                    data: graph.crypto_graph_details?.[typegraph].map((coin: any) => coin[1]),
                    label: `Price ( Past ${day} Days ) in ${'usd'}`,
                    borderColor: "rgb(55, 234, 247)",
                  },
                ],
              }}
            />}
        </Col>
      </>
    </Row>
  </>
}
