import React from 'react';
import { connect } from 'dva';
import Header from '../components/Header';
import Section from '../components/Section';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <Header />
      <Section />
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
