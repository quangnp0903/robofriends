import { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';

import MainPage from '../components/MainPage';

import './App.css';
import { RootState } from '../store';
import { ChangeSearchFieldAction, RobotsAction } from '../constants';
import { ThunkDispatch } from 'redux-thunk';

type Actions = ChangeSearchFieldAction | RobotsAction;

const mapStateToProps = (state: RootState) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, unknown, Actions>
) => {
  return {
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
