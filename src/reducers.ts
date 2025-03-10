import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';
import { Robot } from './components/MainPage';

type SearchState = {
  searchField: string;
};

type RobotState = {
  isPending: boolean;
  robots: Robot[];
  error: string;
};

type Action = {
  type?: string;
  payload?: string;
};

const initialStateSearch: SearchState = {
  searchField: '',
};

export const searchRobots = (
  state = initialStateSearch,
  action: Action = {}
): SearchState => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

const initialStateRobots: RobotState = {
  isPending: false,
  robots: [],
  error: '',
};

export const requestRobots = (
  state = initialStateRobots,
  action = {} as Action
): RobotState => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {
        robots: action.payload,
        isPending: false,
      });
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });
    default:
      return state;
  }
};
