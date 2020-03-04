import React, { useState, useEffect } from 'react';
import { Typography, Row, Col } from 'antd';
import recursiveCall from './recursiveCall'
import 'antd/dist/antd.css'

const { Text } = Typography;

type AssetProps = {
    name: string;
}

export const Asset: React.FC<AssetProps> = (props) => {
    const { name } = props;
    const [lastBoughtPrices, setLastBoughtPrices] = useState(0);
    const [currentPrice, setCurrentPrice] = useState(0);
    const [fee, setFee] = useState(0);
    const [percentage, setPercentage] = useState(0.00);
    const [availableBalance, setAvailableBalance] = useState(0);
    const [lockedBalance, setLockedBalance] = useState(0);
    useEffect(() => {
        const percentage = ((currentPrice - lastBoughtPrices) / lastBoughtPrices) * 100;
        setPercentage(percentage);
    }, [currentPrice, lastBoughtPrices]);
    recursiveCall(() => {
        fetch(`https://localhost:5001/api/trade/${name}-AUD`).then(response => { return response.json() })
            .then(body => {
                const boughtTrades = body.filter((trades: { side: string; orderId: string }) => trades.side === 'Bid');
                setLastBoughtPrices(boughtTrades[0].price);
                let fee = 0.00;
                const transaction = boughtTrades.filter((trades: { orderId: string }) => trades.orderId === boughtTrades[0].orderId);
                transaction.forEach((element: { fee: string }) => {
                    fee = fee + parseFloat(element.fee);
                });
                setFee(fee);
            })
            .catch((error) => console.log(error));

        fetch(`https://localhost:5001/api/market/${name}-AUD`).then(response => { return response.json() })
            .then(body => {
                setCurrentPrice(body.lastPrice)
            })
            .catch((error) => console.log(error));

        fetch(`https://localhost:5001/api/account/balances`).then(response => { return response.json() })
            .then(body => {
                const balance = body.find((balance: { assetName: string; available: string; locked: string }) => balance.assetName === name)
                console.log(balance);
                setAvailableBalance(parseFloat(balance.available));
                setLockedBalance(parseFloat(balance.locked));
            })
            .catch((error) => console.log(error));
    }, 10000)
    return (
        <div>
            <Row>
                <Col span={3}>
                    <Text strong>Asset Type : {name}</Text>
                </Col>
                <Col span={4}>
                    <Text strong>Last bought price: ${lastBoughtPrices}</Text>
                </Col>
                <Col span={7}>
                    <Text strong>Percentage: %{percentage}</Text>
                </Col>
                <Col span={5}>
                    <Text strong>Fee Paid: ${fee}</Text>
                </Col>
            </Row>
            <Row>
                <Col offset={3} span={4}>
                    <Text strong>Current price: ${currentPrice}</Text>
                </Col>
                <Col offset={2} span={3}>
                    <Text strong>Available Balance: {availableBalance}</Text>
                </Col>
                <Col offset={3} span={3}>
                    <Text strong>Locked: {lockedBalance}</Text>
                </Col>
            </Row>
        </div>
    )
}
