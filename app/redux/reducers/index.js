import { combineReducers } from 'redux';
import AuthData from './auth.reducer';
import Data from './data.reducer';

const RootReducer = combineReducers({
  Data, AuthData
});

export default RootReducer;
