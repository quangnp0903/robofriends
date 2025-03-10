import React, { Component } from 'react';

import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';

export type Robot = {
  id: number;
  name: string;
  email: string;
};

type MainPageProps = {
  robots?: Robot[];
  searchField?: string;
  isPending?: boolean;
  onSearchChange?: React.ChangeEventHandler<HTMLInputElement>;
  onRequestRobots?: () => void;
};

export class MainPage extends Component<MainPageProps> {
  componentDidMount() {
    this.props.onRequestRobots?.();
  }

  filterRobots = () => {
    const { robots, searchField = '' } = this.props;
    return robots?.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
  };

  render() {
    const { onSearchChange, isPending } = this.props;

    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {isPending ? (
            <h1>Loading</h1>
          ) : (
            <ErrorBoundary>
              <CardList robots={this.filterRobots()} />
            </ErrorBoundary>
          )}
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
