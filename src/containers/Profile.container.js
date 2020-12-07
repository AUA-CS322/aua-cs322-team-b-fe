import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserAction,
  searchUserAction,
  getUserChartAction,
} from '../actions/user.action';
import {
  getUserLoading,
  getUser,
  getUserChart,
  getUserChartLoading,
} from '../selectors/user.selector';
import Container from '../components/shared/Container';
import { Col } from 'antd';
import Row from '../components/shared/Row';
import MainLoader from '../components/shared/MainLoader';
import UserDetails from '../components/Profile/UserDetails';
import Chart from '../components/Organization/Chart';
import UserSearch from '../components/Organization/UserSearch';
import Logo from '../components/shared/Logo';
import debounce from 'debounce';

const Profile = () => {
  const [selectedUserId, setSelectedUserId] = useState();
  const dispatch = useDispatch();
  const loading = useSelector(getUserLoading);
  const selectedUser = useSelector(getUser);
  const chartData = useSelector(getUserChart);
  const chartLoading = useSelector(getUserChartLoading);

  useEffect(() => {
    dispatch(getUserAction.request());
    dispatch(getUserChartAction.request());
  }, []);

  useEffect(() => {
    if (selectedUser?.id) {
      setSelectedUserId(selectedUser.id);
    }
  }, [selectedUser]);

  const handleSearch = debounce(value => {
    if (!value || value.length < 3) {
      return;
    }
    dispatch(searchUserAction.request({ query: value }));
  }, 200);

  const handleSelect = id => {
    dispatch(getUserAction.request({ id }));
  };

  return (
    <Container top={30}>
      <Row justify="space-between" align="middle">
        <Col span={6}>
          <Logo />
        </Col>
        <Col span={10}>
          <UserSearch onSearch={handleSearch} onSelect={handleSelect} />
        </Col>
      </Row>
      {loading || chartLoading ? (
        <MainLoader />
      ) : (
        <Row justify="space-between" top={60}>
          <Col span={10}>
            <UserDetails {...selectedUser} />
          </Col>
          <Col span={10}>
            <Chart
              data={chartData}
              userId={selectedUserId}
              onSelect={handleSelect}
            />
          </Col>
        </Row>
      )}
    </Container>
  );
};
export default Profile;
