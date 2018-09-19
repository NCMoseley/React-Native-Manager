import { EMPLOYEE_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case EMPLOYEE_FETCH_SUCCESS:
    //   console.log(action);
    //   // We can use the [id] approach because firebase returns an object with keys of "id"
    //   return { ...state, [id]: action.payload };
    case EMPLOYEE_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
