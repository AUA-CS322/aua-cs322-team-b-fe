import React from 'react';
import { Row, Col } from 'antd';

const Container = ({ children }) => (
  <Row justify="center">
    <Col span={20}>{children}</Col>
  </Row>
);

export default Container;
