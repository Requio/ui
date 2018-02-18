import React from 'react';
import { connect } from 'react-redux';
import ProcComponent from '../components/Proc';
import LoadingScreen from '../components/LoadingScreen';
import Proc from '../models/proc';
import Task from '../models/task';

class ProcContainer extends React.Component {
  componentDidMount() {
    if (!this.props.proc) {
      this.props.dispatch(Proc.fetch({ id: this.props.procId, include: Task }));
    }
  }
  render() {
    if (this.props.proc) {
      return <ProcComponent proc={this.props.proc} tasks={this.props.tasks} />;
    }
    return <LoadingScreen msg="Loading proc..." />;
  }
}

export default connect(
  (state, routerProps) => ({
    procId: routerProps.match.params.id,
    proc: Proc.hydratingSelector(state).get(routerProps.match.params.id),
  })
)(ProcContainer);
