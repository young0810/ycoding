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
            <div className={styles.name}>YCoding</div>
          </Col>
        </Row>
        <Row type="flex" align="center" justify="middle">
          <Col span={16}>
            <div className={styles.description}>ycoding means why coding </div>
          </Col>
        </Row>
      </Content>
      <Footer className={styles.footer}>
        <Row type="flex" align="center" justify="middle">
          <Col span={1}>
            <Icon type="down" className={styles.down} />
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
}

export default LogoHeader;
