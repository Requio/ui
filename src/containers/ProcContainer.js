import React from 'react';
import { connect } from 'react-redux';
import { mergeModelProps } from '../models/base-model';
import ProcComponent from '../components/Proc';
import LoadingScreen from '../components/LoadingScreen';
import Proc from '../models/proc';

class ProcContainer extends React.Component {
  componentDidMount() {
    this.props.loadModel();
  }
  render() {
    if (this.props.isModelLoaded()) {
      return <ProcComponent proc={this.props.proc} tasks={this.props.tasks} />;
    }
    return <LoadingScreen msg="Loading proc..." />;
  }
}

export default connect(
  (state, ownProps) => ({
    proc: Proc.memoizedHydratingSelector(state).get(ownProps.match.params.id),
  }),
  (dispatch, ownProps) => ({
    fetchProc: () => dispatch(Proc.fetch({
      primaryKey: ownProps.match.params.id,
      include: 'tasks.actions',
    })),
  }),
  mergeModelProps({
    loadModel({ proc, fetchProc }) {
      if (!proc || !proc.tasks) {
        fetchProc();
      }
    },
    isModelLoaded: ({ proc = {} }) => proc.tasks,
  })
)(ProcContainer);
