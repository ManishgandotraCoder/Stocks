import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';

const App: React.FC = (props: any) => {
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    return (
        <Space direction="vertical">
            {props.type === "password" ?
                <Input.Password
                    placeholder="input password"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                /> : <></>}


        </Space>
    );
};

export default App;