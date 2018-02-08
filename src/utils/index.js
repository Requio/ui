import { connect } from 'react-redux';
import { withRouter } from 'react-router';

export const connectWithRouter = (...args) => Component => withRouter(connect(...args)(Component));
