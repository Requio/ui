import React from 'react';
import { connect } from 'react-redux';
import ProcComponent from '../components/Proc';
import Proc from '../models/proc';
import Action from '../models/action';

const ProcContainer = ({ match, proc, actions }) => (
  <Action.Query isStale={actions.isStale} nonBlocking>
    <Proc.Query primaryKey={match.params.id} include="tasks" isStale={!proc || !proc.tasks} isReady={!actions.isStale}>
      <ProcComponent proc={proc} />
    </Proc.Query>
  </Action.Query>
);

export default connect(
  (state, ownProps) => ({
    proc: Proc.hydratingSelector(state, ownProps.match.params.id),
    actions: Action.selector(state),
  }),
)(ProcContainer);
