import React, { useState } from 'react';
import { Button } from 'antd';
import { Typography } from 'antd';
import { Row, Col } from 'antd';
import recursiveCall from './recursiveCall'
import 'antd/dist/antd.css'

const { Text } = Typography;

type AssetProps = {
    name: string
}

export const Asset = ({ name }: AssetProps) => {
    let [lastBoughtPrices, setLastBoughtPrices] = useState(0);
    let [currentPrice, setCurrentPrice] = useState(0);
    recursiveCall(() => {
        fetch(`https://localhost:5001/api/trade/${name}-AUD`).then(response => { return response.json() })
            .then(body => {
                const boughtTrades = body.filter((trades: { side: string; }) => trades.side === 'Bid');
                setLastBoughtPrices(boughtTrades[0].price);
            })
            .catch((error) => console.log(error));
        
            fetch(`https://localhost:5001/api/market/${name}-AUD`).then(response => { return response.json() })
            .then(body => {
                setCurrentPrice(body.lastPrice)
            })
            .catch((error) => console.log(error));
    }, 10000)
    return (
        <div>
            <Row>
                <Col span={5}>
                    <Text strong>Asset Type : {name}</Text>
                </Col>
                <Col span={5}>
                    <Text strong>Last bought price: ${lastBoughtPrices}</Text>
                </Col>
            </Row>
            <Row>
                <Col offset={5} span={5}>
                    <Text strong>Current price: ${currentPrice}</Text>
                </Col>
            </Row>
        </div>
    )
}
