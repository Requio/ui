import React from 'react';
import { Route } from 'react-router';
import { connectWithRouter } from '../utils';
import { getSession } from '../services/session';

import AuthRoute from './AuthRoute';
import Login from './Login';
import HomeContainer from './HomeContainer';
import ProcContainer from './ProcContainer';
import ProfileContainer from './ProfileContainer';

import SideBar from '../components/SideBar';
import Page from '../components/Page';
import LoadingScreen from '../components/LoadingScreen';


class AppContainer extends React.Component {
  componentDidMount() {
    this.props.getSession();
  }
  render() {
    if (this.props.loading) {
      return <LoadingScreen msg="Loading session..." />;
    }
    return (
      <div>
        <SideBar />
        <Page>
          <Route path="/login" component={Login} />
          <AuthRoute exact path="/" component={HomeContainer} />
          <AuthRoute exact path="/proc/:id" component={ProcContainer} />
          <AuthRoute exact path="/profile" component={ProfileContainer} />
        </Page>
        {/* <AuthRoute path="/procs" component={Procs}/>
        <AuthRoute path="/user-account" component={UserAccount}/> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.session.loading,
});

const mapDispatchToProps = dispatch => ({
  getSession: () => dispatch(getSession()),
});

export default connectWithRouter(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
