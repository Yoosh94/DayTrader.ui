import React from 'react';
import './App.css';
import {Asset} from './Asset';
import 'antd/dist/antd.css'
import { Layout, Row, Col } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <div className="App">
      <Layout>
      <Header>Header</Header>
      <Content>
        <Row>
          <Col span={24}>
            <Asset name='LTC'/>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Asset name='POWR'/>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Asset name='ETC'/>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Asset name='BCH'/>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Asset name='BTC'/>
          </Col>
        </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
    </div>
  );
}

export default App;
