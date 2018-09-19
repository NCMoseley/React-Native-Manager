import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

// We can use a single action creator for the form because we are passing both the prop and the value through to the reducer
export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  // Wrapping with fat arrow function to satisfy requirements of Redux-Thunk to prevent Async error
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.pop();
      });
  };
};
