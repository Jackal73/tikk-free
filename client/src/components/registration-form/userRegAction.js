import { userRegistration } from '../../api/userApi';
import {
  registrationError,
  registrationPending,
  registrationSuccess
} from './userRegistrationSlice';

export const newUserRegistration = (frmData) => async (dispatch) => {
  try {
    dispatch(registrationPending());

    const result = await userRegistration(frmData);
    result.status === "success"
      ? dispatch(registrationSuccess(result.message))
      : dispatch(registrationError(result.message));

    console.log(result);
  } catch (error) {
    dispatch(registrationError(error.message));
  }
};