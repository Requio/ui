import React from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';
import Proc from '../models/proc';

class HomeContainer extends React.Component {
  componentDidMount() {
    if (this.props.procs.isStale) {
      this.props.dispatch(Proc.fetch());
    }
  }
  render() {
    return (
      <Home procs={this.props.procs} />
    );
  }
}

export default connect(
  state => ({
    procs: state.entities.procs,
  })
)(HomeContainer);
