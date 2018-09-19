import { EMPLOYEE_UPDATE } from '../actions/types';

const INITIAL_STATE = { name: '', phone: '', shift: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // this is key interpolation. the key and value will both be created at runtime. The EMPLOYEE_UPDATE action type has a payload of 'prop' and 'value'
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
