import React, { useMemo, useState } from 'react';
import { Popover, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import './topbar.scss'
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

    const [showArrow, setShowArrow] = useState(true);
    const [arrowAtCenter, setArrowAtCenter] = useState(false);

    const mergedArrow = useMemo(() => {
        if (arrowAtCenter) return { arrowPointAtCenter: true };
        return showArrow;
    }, [showArrow, arrowAtCenter]);

    return (
        <>
{/* 
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
                <img className='user_img' src="https://i.pinimg.com/736x/f5/9b/fa/f59bfa54525e640a8d0fa3f2e219bb29.jpg" alt ="user"></img>
            </div> */}

</>


);
};

export default Topbar;