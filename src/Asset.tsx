import React from 'react';
import {Button} from 'antd';
import { Typography } from 'antd';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css'

const { Text } = Typography;

type AssetProps = {
    name:string,
    lastBoughtPrice: number,
    currentPrice: number
}

export const Asset= ({name, lastBoughtPrice, currentPrice}:AssetProps) => {
return(
    <Row>
        <Col span={5}>
        <Text strong>Asset Type : {name}</Text> 
        </Col>
        <Col span={5}>
            <Text strong>Last bought price: ${lastBoughtPrice}</Text> 
        </Col>
        <Col span={5}>
            <Text strong>Current price: ${currentPrice}</Text> 
        </Col>
    </Row>
    )
}
