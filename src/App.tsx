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
            <Asset name='LTC' lastBoughtPrice={120.99} currentPrice={200.00}/>
          </Col>
        </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
    </div>
  );
}

export default App;
