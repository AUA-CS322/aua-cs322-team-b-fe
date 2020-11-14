import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Layout, Row, Button } from 'antd';
import { emptyTokenState, loadState } from '../../configs/local-storage';
import { logOutAction } from '../../actions/user.action';

const HeaderContent = styled(Row)`
  height: 100%;
`;

const Header = ({ history }) => {
  const dispatch = useDispatch();
  const state = loadState();

  const handleLogOut = () => {
    emptyTokenState();
    dispatch(logOutAction.actions.success({ params: null }));
    history.push('/');
  };

  return (
    <>
      <Layout.Header position="fixed">
        <HeaderContent justify="end" align="middle">
          {!!(state && state.accessToken) && (
            <Button onClick={handleLogOut}>Log Out</Button>
          )}
        </HeaderContent>
      </Layout.Header>
    </>
  );
};

export default withRouter(Header);
