import { Robot } from './components/MainPage';

export const CHANGE_SEARCHFIELD = 'CHANGE_SEARCHFIELD';

export const REQUEST_ROBOTS_PENDING = 'REQUEST_ROBOTS_PENDING';
export const REQUEST_ROBOTS_SUCCESS = 'REQUEST_ROBOTS_SUCCESS';
export const REQUEST_ROBOTS_FAILED = 'REQUEST_ROBOTS_FAILED';

export type ChangeSearchFieldAction = {
  type: typeof CHANGE_SEARCHFIELD;
  payload: string;
};

type RequestRobotsPendingAction = {
  type: typeof REQUEST_ROBOTS_PENDING;
};

type RequestRobotsSuccessAction = {
  type: typeof REQUEST_ROBOTS_SUCCESS;
  payload: Robot[];
};

type RequestRobotsFailedAction = {
  type: typeof REQUEST_ROBOTS_FAILED;
  payload: string;
};

export type RobotsAction =
  | RequestRobotsPendingAction
  | RequestRobotsSuccessAction
  | RequestRobotsFailedAction;
