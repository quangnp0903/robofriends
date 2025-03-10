import { ThunkAction } from 'redux-thunk';
import { apiCall } from './api/api';
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
  RobotsAction,
  ChangeSearchFieldAction,
} from './constants';
import { RootState } from './store';

export const setSearchField = (text: string): ChangeSearchFieldAction => ({
  type: CHANGE_SEARCHFIELD,
  payload: text,
});

export const requestRobots =
  (): ThunkAction<void, RootState, unknown, RobotsAction> => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    apiCall('https://jsonplaceholder.typicode.com/users')
      .then((data) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
      .catch((error) =>
        dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error })
      );
  };
