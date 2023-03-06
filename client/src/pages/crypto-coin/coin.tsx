import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';
import { Row, Col } from "antd"
import * as cryptoJSON from "../../constants/graph"
import * as cryptoInfo from "../../crypto"

import moment from 'moment';
import { Breadcrumb } from 'antd';
import '../../commonscss/common.scss'
import './coin.scss'

const prices: any = cryptoJSON?.default?.prices
const data: any = []

prices.forEach(function (value: any, key: any) {
  let _date = new Date(value[0])
  let _final_date = moment(_date).format('DD-MMM-YYYY');
  data.push({ Date: _final_date, scales: value[1] })
})

const Coin = () => {


  const config: any = {
    data,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
  };

  return <>
    <Breadcrumb className='breadcrumb'>
      <Breadcrumb.Item>
        <a href="/">Dashboard</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="/crypto">Crypto Currency</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="/crypto">Crypto Currency</a>
      </Breadcrumb.Item>
    </Breadcrumb>
    <Row>
      <div className='div'>
      <span className='name'>Bitcoin</span>
      <Row>
        <Col>
        </Col>
      <Col>
        <Line {...config} />
      </Col>
      </Row>

      </div>
      {/* <Col>
        <Line {...config} />
      </Col> */}

    </Row>
  </>
};

export default Coin