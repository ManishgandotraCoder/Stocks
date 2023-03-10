import { Breadcrumb } from 'antd';
import "./crypto.scss"
import '../../commonscss/common.scss'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios"
const Crypto = () => {
    const navigate = useNavigate();
    const [coinlist, setCoinlist] = useState([])
    function onPageChange(path: any) {
        navigate(`/crypto/${path}`);
    }

    useEffect(() => {
        getData()
    }, [])
    async function getData() {
        const info = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
        setCoinlist(info.data);

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
            {coinlist.map((item: any, i) =>
                <tr onClick={() => onPageChange(item.id)}>
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