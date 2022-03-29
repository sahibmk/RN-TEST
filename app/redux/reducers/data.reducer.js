import {
  SET_DATA,
  GET_DATA,
  CLEAR_DATA,
} from '../types';

const initialState = {
  requesting: false,
  error: null,
  success: null,
  data: null,
};

export default function (state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case SET_DATA: {
      return {
        requesting: false,
        data: payload,
      };
    }
    case CLEAR_DATA: {
      return {
        requesting: false,
        data: null
      };
    }

    default:
      return state;
  }
}
