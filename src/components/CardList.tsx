import React from 'react';
import Card from './Card';
import { Robot } from './MainPage';

type CardListProps = {
  robots?: Robot[];
};

const CardList: React.FC<CardListProps> = ({ robots }) => {
  return (
    <div>
      {robots?.map((robot) => (
        <Card
          key={robot.id}
          id={robot.id}
          name={robot.name}
          email={robot.email}
        />
      ))}
    </div>
  );
};
export default CardList;
