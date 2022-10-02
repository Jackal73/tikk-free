import { fetchUser } from '../../api/userApi';
import {
  getUserFail,
  getUserPending,
  getUserSuccess
} from './userSlice';

export const getUserProfile = () => async (dispatch) => {
  try {
    dispatch(getUserPending());
    const result = await fetchUser();

    if (result.user && result.user._id)
    return dispatch(getUserSuccess(result.user));

    dispatch(getUserFail("User was not found"));
  } catch (error) {
    dispatch(getUserFail(error));
  }
};