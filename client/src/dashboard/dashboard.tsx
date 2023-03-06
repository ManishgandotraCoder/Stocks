import * as React from "react"
import { Breadcrumb } from 'antd';
import '../commonscss/common.scss'

class Dashboard extends React.Component {
    render() {
        return <>
        <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item>
                <a href="/">Home</a>
            </Breadcrumb.Item>
           
        </Breadcrumb>
        </>;
    }
}
export default Dashboard