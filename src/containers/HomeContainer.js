import React from 'react';
import { connect } from 'react-redux';
import { mergeModelProps } from '../models/base-model';
import Home from '../components/Home';
import Proc from '../models/proc';

class HomeContainer extends React.Component {
  componentDidMount() {
    this.props.loadModel();
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
  }),
  dispatch => ({
    fetchProcs: () => dispatch(Proc.fetch()),
  }),
  mergeModelProps({
    loadModel({ procs, fetchProcs }) {
      if (procs.isStale) {
        fetchProcs();
      }
    },
  })
)(HomeContainer);
