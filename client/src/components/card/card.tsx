import React from 'react';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

const CardHead = (props: any) => (
    <Card>
        <Meta
            avatar={<img src={props?.card?.image?.thumb}></img>}
            title={props.card.name}
            description={`Current Price : ${props?.card?.market_data?.current_price?.usd}$ \n Total Volume : ${props?.card.market_data.total_volume.usd}$`}
        />
    </Card>
);

export default CardHead;