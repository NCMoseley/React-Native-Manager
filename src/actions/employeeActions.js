import { EMPLOYEE_UPDATE } from './types';

// We can use a single action creator for the form because we are passing both the prop and the value through to the reducer
export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};
