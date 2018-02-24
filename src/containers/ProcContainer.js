import React from 'react';
import { connect } from 'react-redux';
import ProcComponent from '../components/Proc';
import Proc from '../models/proc';

const ProcContainer = ({ match, proc }) => (
  <Proc.Query primaryKey={match.params.id} include="tasks.actions" isStale={!proc || !proc.tasks}>
    <ProcComponent proc={proc} />
  </Proc.Query>
);

export default connect(
  (state, ownProps) => ({
    proc: Proc.hydratingSelector(state).get(ownProps.match.params.id),
  }),
)(ProcContainer);
