import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAction } from '../actions/user.action';
import { getUserLoading, getUser } from '../selectors/user.selector';
import Container from '../components/shared/Container';
import { Col } from 'antd';
import Row from '../components/shared/Row';
import MainLoader from '../components/shared/MainLoader';
import UserDetails from '../components/Profile/UserDetails';
import Chart from '../components/Organization/Chart';
import UserSearch from '../components/Organization/UserSearch';
import Logo from '../components/shared/Logo';

const Profile = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getUserLoading);
  const selectedUser = useSelector(getUser);

  useEffect(() => {
    dispatch(getUserAction.request());
  }, []);

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

      {loading ? (
        <MainLoader />
      ) : (
        <Row justify="space-between" top={60}>
          <Col span={10}>
            <UserDetails {...selectedUser} />
          </Col>
          <Col span={10}>
            <Chart />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Profile;
