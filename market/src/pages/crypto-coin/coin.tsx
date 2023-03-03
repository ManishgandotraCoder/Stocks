import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';
import * as cryptoJSON from "../../crypto"
import {Row, Col} from "antd"
const Coin = () => {
  const [data, setData] = useState(
    [
        {
          "Date": "2023-03-02",
          "scales": 23426
        },
    
        {
            "Date": "2023-04-02",
            "scales": 5000
        }
      ]
  );

  const config :any = {
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
  <Row>
    <Col>
    <Line {...config} />
    </Col>
  </Row>
  </>
};

export default Coin