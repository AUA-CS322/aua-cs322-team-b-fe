import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInAction } from '../actions/user.action';
import { signInLoading } from '../selectors/user.selector';
import { Button } from 'antd';
import Container from '../components/shared/Container';

const SignIn = () => {
  const dispatch = useDispatch();
  const loading = useSelector(signInLoading);

  const signInHandler = () => {
    dispatch(signInAction.request({}));
  };

  return (
    <Container>
      <Button
        type="primary"
        shape="round"
        onClick={signInHandler}
        loading={loading}>
        Sign In
      </Button>
    </Container>
  );
};

export default SignIn;
