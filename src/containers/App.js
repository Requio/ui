import React from 'react';
import { Route } from 'react-router';
import { connectWithRouter } from '../utils';
import { getSession } from '../services/session';

import AuthRoute from './AuthRoute';
import Login from './Login';
import LoadingScreen from '../components/LoadingScreen';
import Home from '../components/Home';


class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    props.getSession();
  }
  render() {
    if (this.props.loading) {
      return <LoadingScreen />;
    }
    return (
      <div>
        <Route path="/login" component={Login} />
        <AuthRoute exact path="/" component={Home} />
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
)(AppComponent);
