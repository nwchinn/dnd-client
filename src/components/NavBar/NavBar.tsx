import React from 'react';
import { Button } from '@material-ui/core';

interface NavBarProps {
  handleClick: (page: string) => void;
}

export const NavBar: React.FC<NavBarProps> = (props) => {
  const { handleClick } = props;

  return (
    <div>
      <Button onClick={() => handleClick('monsters')}>Monsters</Button>
      <Button onClick={() => handleClick('characters')}>Characters</Button>
      <Button onClick={() => handleClick('encounters')}>Encounter</Button>
    </div>
  );
};

