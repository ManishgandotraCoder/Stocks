import "./crypto.scss"
import '../../commonscss/common.scss'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import * as CryptoActions from "../../redux/actions/crypto.actions"
import { useDispatch, useSelector } from 'react-redux';
const Crypto = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const coinlist: any = useSelector((user: any) => user.crypto)

    function onPageChange(path: any) {
        navigate(`/crypto/${path}`);
    }

    useEffect(() => {
        getData()
    }, [])
    async function getData() {
        dispatch(await CryptoActions.getData())

    }
    return <>
       
        <table id="customers" >
            <tr className="table">
                <th>#</th>
                <th>Currency</th>
                <th>Price</th>
                <th>Total Volume</th>
                <th>Range(Last 24 hrs)</th>
            </tr>
            {coinlist && coinlist.length && coinlist.map((item: any, i: any) =>
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