import React from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';
import Proc from '../models/proc';

const HomeContainer = ({ procs }) => (
  <Proc.Query isStale={procs.isStale}>
    <Home procs={procs} />
  </Proc.Query>
);

export default connect(
  state => ({
    procs: Proc.selector(state),
  })
)(HomeContainer);
