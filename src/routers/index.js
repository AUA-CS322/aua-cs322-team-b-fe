import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import MainLoader from '../components/shared/MainLoader';
import Header from '../components/Layout/Header';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { isNotAuth, isAuth } from '../configs/auth';

const { Footer } = Layout;

const SignIn = React.lazy(() => import('../containers/SignIn.container'));
const Profile = React.lazy(() => import('../containers/Profile.container'));
const NotFound = React.lazy(() => import('../containers/NotFound.container'));

class AppRouter extends PureComponent {
  render = () => (
    <Router>
      <Header />
      <React.Suspense fallback={<MainLoader />}>
        <Layout.Content>
          <Switch>
            <Route path="/" exact component={isNotAuth(SignIn)} />
            <Route path="/profile" component={isAuth(Profile)} />
            <Route component={NotFound} />
          </Switch>
        </Layout.Content>
        <Layout.Footer>
          <Footer />
        </Layout.Footer>
      </React.Suspense>
    </Router>
  );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(AppRouter);
