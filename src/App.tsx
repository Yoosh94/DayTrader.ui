import React from 'react';
import './App.css';
import { Asset } from './Asset';
import 'antd/dist/antd.css'
import { Layout, Row, Col, Divider } from 'antd';

const { Header, Footer, Content } = Layout;


const App: React.FC = () => {
  const assetList = ['LTC', 'POWR', 'ETC', 'BCH', 'BTC', 'XRP']
  const assets = assetList.map((asset) => {
    return (
      <div key={asset}>
        <Row>
          <Col span={24}>
            <Asset name={asset} />
          </Col>
        </Row>
        <Divider />
      </div>
    );
  });
  return (
    <div className="App">
      <Layout>
        <Header>Header</Header>
        <Content>
          {assets}
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
