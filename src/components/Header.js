import React from 'react';
import { Layout, Row, Col, Icon } from 'antd';
import styles from './Header.css';
import img from '../assets/logo.png';

const { Header, Content, Footer } = Layout;

function LogoHeader() {
  return (
    <Layout className={styles.normal}>
      <Header className={styles.header}>
        <img src={img} alt="logo" />
      </Header>
      <Content>
        <Row type="flex" align="center" justify="middle">
          <Col span={16}>
            <div className={styles.name}>I'm yy</div>
          </Col>
        </Row>
      </Content>
      <Footer className={styles.footer}>
        <Row type="flex" align="center" justify="middle">
          {/* <Col span={1}>
            <Icon type="down" className={styles.down} />
          </Col> */}
          <Col span={16}>
            <div style={{ textAlign: 'center', fontSize: '40px' }} className={styles.description}>老婆，三八节快乐! </div>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
}

export default LogoHeader;
