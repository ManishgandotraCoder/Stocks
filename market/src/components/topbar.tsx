import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Header, Content, Sider } = Layout;



const items1 = [
    { key: "crypto", label: "Crypto" },
    { key: "us-stocks", label: "US Stocks" },
    { key: "share-market", label: "Indian Share market" },

]
function Topbar(props: any) {
    const navigate = useNavigate();

    const changePath = (path:any ) => {
        navigate(path.key)
    }
    return (
        <Layout>
            <Header className="header" color="#000">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['crypto']} items={items1} onClick={changePath} />
            </Header>
        </Layout>
    );
};

export default Topbar;