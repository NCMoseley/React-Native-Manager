import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_DELETE_SUCCESS
} from './types';
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

export const employeeFetch = () => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      // this method call is persistant throughout the lifecycle of the app. :)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
        Actions.pop();
      });
  };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        dispatch({ type: EMPLOYEE_DELETE_SUCCESS });
        Actions.pop();
      });
  };
};
