import React, { useMemo, useState } from 'react';
import { Popover, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './topbar.scss'
import { Input, Space } from 'antd';
import * as cryptoJSON from "../../crypto"
import '../../commonscss/color.scss'

function Topbar(props: any) {
    const navigate = useNavigate();
    const changePath = (path: any) => {
        navigate(path)
    }
    const content = (
        <div className="popover">
            {cryptoJSON.default.slice(0, 10).map((text: any) => <p onClick={() => changePath(`/crypto/${text?.id}`)}>{text.name}</p>)}


            <a onClick={() => changePath('/crypto')}>View More..</a>

        </div>
    );

    const content_us = (
        <div className="popover">
            <p>Google</p>
            <p>Facebook</p>
            <p>Microsoft</p>
            <p>Tesla</p>
            <p>Twitter</p>
            <p>Dominos</p>
            <p>Mc Donalds</p>
            <p>Accenture</p>
            <p>Exelon</p>
            <a>View More..</a>

        </div>
    );

    const content_ind = (
        <div className="popover">
            <p>HCL</p>
            <p>TCS</p>
            <p>Wipro</p>
            <p>Reliance</p>
            <p>Flipkart</p>
            <p>Myntra</p>
            <p>Hotstar</p>
            <a>View More..</a>

        </div>
    );
    const [showArrow, setShowArrow] = useState(true);
    const [arrowAtCenter, setArrowAtCenter] = useState(false);

    const mergedArrow = useMemo(() => {
        if (arrowAtCenter) return { arrowPointAtCenter: true };
        return showArrow;
    }, [showArrow, arrowAtCenter]);

    return (
        <>

            <div className='topbar'>
                <img className='img' src="https://cdn-icons-png.flaticon.com/512/2390/2390344.png"></img>
                <span className='invest_text' onClick={() => changePath('/')}>Lets Invest</span>&nbsp;&nbsp;
                <Popover placement="topLeft" title={<span className='item_text '>Cryptocurrencies</span>} content={content} arrow={mergedArrow} color="#317874">
                    <span className='item_text ' onClick={() => changePath('crypto')} >Cryptocurrencies</span>
                </Popover>
                <Input
                    placeholder="Search here"
                    className='input'
                />
                {/* <span className='sign'>Sign In</span>
                <Button className='signup'>Sign Up</Button> */}
            </div>

            {/* <center>

                <div className='topbar '>
                    <Popover placement="topLeft" title={<span>Crypto Currency</span>} content={content} arrow={mergedArrow} color="#000000">
                        <span className='item_text ' onClick={() => changePath('crypto')} >Crypto</span>
                    </Popover>
                    <span className='slash_text'>|</span>
                    <Popover placement="topLeft" title={<span>US Stocks</span>} content={content_us} arrow={mergedArrow} color="#000000">

                        <span className='item_text' onClick={() => changePath('us-stocks')}>US Stocks</span>
                    </Popover>
                    <span className='slash_text'>|</span>
                    <Popover placement="topLeft" title={<span>Indian stocks</span>} content={content_ind} arrow={mergedArrow} color="#000000">

                        <span className='item_text' onClick={() => changePath('share-market')}>Indian stocks</span>
                    </Popover>

                </div>
            </center> */}
        </>
        // <Layout>
        //     <Header className="header" color="#000">
        //         <div className="logo" />
        //         <span className='item_text'>US Stocks</span>
        //         {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['crypto']} items={items1} onClick={changePath} /> */}
        //     </Header>
        // </Layout>
    );
};

export default Topbar;