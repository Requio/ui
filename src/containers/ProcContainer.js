import React from 'react';
import { connect } from 'react-redux';
import { Query } from 'redux-sideloader';
import ProcComponent from '../components/Proc';
import Proc from '../models/proc';
import Task from '../models/task';
import Action from '../models/action';

const ProcContainer = ({ match, proc }) => (
  <Query set={Proc.q(match.params.id, { include: Task.q({ include: Action.q() }) })}>
    <ProcComponent proc={proc} />
  </Query>
);

export default connect(
  (state, ownProps) => ({
    proc: Proc.hydratingSelector(state, ownProps.match.params.id),
  }),
)(ProcContainer);

// Proc.q(match.params.id, {
//   include: Task.q({
//     include: Action.q()
//   })
// })
