import { createAction } from 'redux-actions';
import {
  GET_DATA,
  CLEAR_DATA,
  SET_DATA,
} from '../types';

export const setData = (data) => ({
    type: SET_DATA,
    payload: data
})

