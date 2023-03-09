import * as cryptoJSON from "../../crypto"
import { Breadcrumb } from 'antd';
import "./crypto.scss"
import '../../commonscss/common.scss'
import { useNavigate } from 'react-router-dom';
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
const Crypto = () => {
    const navigate = useNavigate()
    function onPageChange(path: any) {
        navigate(`/crypto/${path}`);

    }
    return <>
        <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item>
                <a href="/">Dashboard</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="/crypto">Crypto Currency</a>
            </Breadcrumb.Item>
        </Breadcrumb>
        <table id="customers" >
            <tr className="table">
                <th>#</th>
                <th>Currency</th>
                <th>Price</th>
                <th>Total Volume</th>
                <th>Range(Last 24 hrs)</th>
            </tr>
            {cryptoJSON.default.map((item, i) =>
                <tr  onClick={() => onPageChange(item.id)}>
                    <td>{i + 1}</td>
                    <td><img src={item.image} className="img" />{item.name}<span className="symbol">{item.symbol.toUpperCase()}</span></td>
                    <td>{item.current_price}$</td>
                    <td>{item.total_volume}$</td>
                    <td>{item.high_24h}$ - {item.low_24h}$</td>
                    {/* <td > */}
                    {/* <Line id={item.symbol} options={options} width={10}  height={5} data={data} /> */}
                    {/* </td> */}
                </tr>
            )}


        </table>
        {/* {JSON.stringify(cryptoJSON)} */}
    </>;
}
export default Crypto