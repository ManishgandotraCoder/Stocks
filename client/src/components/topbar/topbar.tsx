import React, { useEffect, useMemo, useState } from 'react';
import { Popover, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import './topbar.scss'
import * as cryptoJSON from "../../crypto"
import '../../commonscss/color.scss'
import { Button, Modal } from 'antd';
import * as colors from "../../commonscss/color"
import * as ext from "../../constants/extentions"
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
    const [open, setOpen] = useState(false);

    useEffect(() => {
        console.log(colors.default);

    }, [])
    const mergedArrow = useMemo(() => {
        if (arrowAtCenter) return { arrowPointAtCenter: true };
        return showArrow;
    }, [showArrow, arrowAtCenter]);

    const showModal = () => {
        setOpen(true);
    };
    const handleCancel = () => {
        setOpen(false);
    };

    const content_profile = [
        <span  className='pop_menu ' onClick={showModal}>View Profile<br/></span>,
        <span  className='pop_menu '>Sign Out</span>

    ]
    return (
        <>
            <div id="main">
                <div>
                    <span className='invest_text' onClick={() => changePath('/')}>Hack$</span>&nbsp;&nbsp;
                    <Popover placement="topLeft" title={<span className='item_text '>Cryptocurrencies</span>} content={content} arrow={mergedArrow} color={colors.default.darker}>
                        <span className='item_text ' onClick={() => changePath('crypto')} >Cryptocurrencies</span>
                    </Popover>
                </div>

                <div>
                </div>
                <Popover placement="topLeft" title={<span className='item_text '>Ethan Hunt</span>} content={content_profile} arrow={mergedArrow} color={colors.default.darker}>
                    <img  className='user_img cursor' src="https://i.pinimg.com/736x/f5/9b/fa/f59bfa54525e640a8d0fa3f2e219bb29.jpg"></img>
                </Popover>
            </div>

            <Modal
                title={ext.default.title}
                open={open}
                footer={[]}
                onCancel={handleCancel}

            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input size='large' />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password size='large' />
                </Form.Item>
                <Form.Item>
                    <Button className='ant-btn-primary' htmlType="submit">
                        Sign in
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit">
                        Google
                    </Button>
                    <Button htmlType="submit">
                        Facebook
                    </Button>
                </Form.Item>

            </Modal>
        </>


    );
};

export default Topbar;