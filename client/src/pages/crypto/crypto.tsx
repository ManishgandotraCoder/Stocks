import * as cryptoJSON from "../../crypto"
import { Breadcrumb } from 'antd';
import  { EyeFilled } from "@ant-design/icons";
import "./crypto.scss"
import '../../commonscss/common.scss'
import { useNavigate } from 'react-router-dom';

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
                <th></th>
            </tr>
            {cryptoJSON.default.map((item, i) =>
                <tr>
                    <td>{i + 1}</td>
                    <td><img src={item.image} className="img" />{item.name}<span className="symbol">{item.symbol.toUpperCase()}</span></td>
                    <td>{item.current_price}$</td>
                    <td>{item.total_volume}$</td>
                    <td>{item.high_24h}$ - {item.low_24h}$</td>
                    <td className="cursor" onClick={() => onPageChange(item.id)}><EyeFilled /></td>
                </tr>
            )}


        </table>
        {/* {JSON.stringify(cryptoJSON)} */}
    </>;
}
export default Crypto