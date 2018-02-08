import { connect } from 'react-redux';
import { openSession } from '../services/session';
import LoginForm from '../components/LoginForm';

const mapStateToProps = state => ({
  authenticated: state.session.authenticated,
});

const mapDispatchToProps = dispatch => ({
  login: provider => dispatch(openSession(provider)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
