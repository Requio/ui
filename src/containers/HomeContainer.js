import React from 'react';
import { connect } from 'react-redux';
import { Query, q } from 'redux-sideloader';
import Home from '../components/Home';
import Proc from '../models/proc';
import Task from '../models/task';

const HomeContainer = ({ procs }) => (
  <Query set={q(Proc.q(Task.q()))}>
    <Home procs={procs} />
  </Query>
);

export default connect(
  state => ({
    procs: Proc.hydratingSelector(state),
  })
)(HomeContainer);

// /api/sideloader/?include[]=procs&include[]=tasks.actions

// /api/sideloader/?q[]=procs(1).tasks&q[]=actions

// /api/sideloader/?q[procs.id]=1&q[procs.include.tasks.include.actions]=true

// {
//   procs: {
//     primaryKey: 1,
//     include: {
//       tasks: {
//         primaryKey: null,
//         include: {
//           actions: true,
//         },
//       },
//     },
//   },
// };
