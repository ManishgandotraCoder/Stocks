import React from 'react';
import { Avatar, Card } from 'antd';
import { Line } from '@ant-design/plots';
import * as cryptoJSON from "../../constants/graph"
import moment from 'moment';
import "./card.scss"
const { Meta } = Card;
const prices: any = cryptoJSON?.default?.prices
console.log()
const data: any = []

prices.forEach(function (value: any, key: any) {
    let _date = new Date(value[0])
    let _final_date = moment(_date).format('DD-MMM-YYYY');
    data.push({ Date: _final_date, scales: value[1] })
})

const config: any = {
    data,
    xField: 'Date',
    yField: 'scales',
    // height:200,
    width:20
   
};

const CardHead = (props: any) => (
    <div className='card'>
        <span><img className="img" src={props?.card?.image} /><span className='bold'>{props?.card?.name}</span></span><br />
        <span className='span'>{`Current Price : ${props?.card?.current_price}$`}</span><br />
        <span className='span'>Total Volume : {props?.card.total_volume}</span>
        <Line {...config} />
    </div>

);

export default CardHead;