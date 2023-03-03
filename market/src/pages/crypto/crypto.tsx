import * as React from "react"
import * as cryptoJSON from "../../crypto"
import { Col, Divider, Row } from 'antd';
import CardHead from "../../components/card/card";
import "./crypto.scss"
const Crypto = () => {

    return <>
        <Row>
            {cryptoJSON.default.map(item =>
                <Col className="gutter-row" span={6}>
                    <div className="col_icon">
                        <CardHead card={item} />
                    </div>

                </Col>
            )}

        </Row>
        {/* {JSON.stringify(cryptoJSON)} */}
    </>;
}
export default Crypto