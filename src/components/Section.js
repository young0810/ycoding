import React from 'react';
import { Layout, Row, Col } from 'antd';

import styles from './Section.css';

const { Content } = Layout;

function Section() {
  return (
    <Layout className={styles.normal}>
      <Content className={styles.content}>
        <Row type="flex" align="center" justify="middle" className={styles.row}>
          <Col span={4}>Content Coming Soon !</Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default Section;
