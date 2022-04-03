import React from 'react';
import { Title } from './sections/Title';
import { Messages } from './sections/Messages/Messages';
import { Photos } from './sections/Photos/Photos';

export const App = () => {
  return (
    <>
      <Title />
      <Messages />
      <Photos title="1A. Fall 2017" />
    </>
  );
};
