import React from 'react';
import Container from '../components/shared/Container';
import { Col, Input } from 'antd';
import Row from '../components/shared/Row';
import UserDetails from '../components/Profile/UserDetails';
import Chart from '../components/Organization/Chart';
import UserSearch from '../components/Organization/UserSearch';
import Logo from '../components/shared/Logo';

const { Search } = Input;

const Profile = () => {
  const onSearch = value => console.log(value);
  return (
    <Container top={30}>
      <Row justify="space-between" align="middle">
        <Col span={6}>
          <Logo />
        </Col>
        <Col span={10}>
          <UserSearch onSearch={onSearch} />
        </Col>
      </Row>

      <Row justify="space-between" top={50}>
        <Col span={10}>
          <UserDetails />
        </Col>
        <Col span={10}>
          <Chart />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
