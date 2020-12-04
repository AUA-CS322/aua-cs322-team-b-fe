import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInAction } from '../actions/user.action';
import { signInLoading } from '../selectors/user.selector';
import { Row, Col } from 'antd';
import Container from '../components/shared/Container';
import SignInForm from '../components/Authorization/SignInForm';
import Logo from '../components/shared/Logo';

const layout = {
  xs: { span: 22, offset: 1 },
  md: { span: 14, offset: 5 },
  lg: { span: 10, offset: 7 },
};

const SignIn = () => {
  const dispatch = useDispatch();
  const loading = useSelector(signInLoading);

  const signInHandler = values => {
    dispatch(signInAction.request(values));
  };

  return (
    <Container top={60}>
      <Row gutter={[0, 60]}>
        <Col {...layout}>
          <Logo />
        </Col>
        <Col {...layout}>
          <SignInForm onFinish={signInHandler} loading={loading} />
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
