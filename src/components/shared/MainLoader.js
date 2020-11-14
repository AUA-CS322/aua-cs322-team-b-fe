import React from 'react';
import { Row } from 'antd';
import Loader from './Loader';

const MainLoader = () => (
  <Row justify="center">
    <Loader size={60} />
  </Row>
);

export default MainLoader;
