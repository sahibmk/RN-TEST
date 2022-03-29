import { connect } from 'react-redux';
import { authActionsCreator } from '../actions';

function mapStateToProps({ Data }) {
  return {
    Data,
  };
}

const mapDispatchToProps = authActionsCreator;

export function authData(configMapStateToProps = mapStateToProps) {
  return connect(configMapStateToProps, mapDispatchToProps);
}
