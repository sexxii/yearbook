import React from 'react';
import { Title } from './sections/Title';
import { Messages } from './sections/Messages/Messages';
import { PhotoBuilder } from './sections/Photos/PhotoBuilder';
import { People } from './sections/People/People';
import { ThankYou } from './sections/ThankYou/ThankYou';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const App = () => {
  return (
    <>
      <Title />
      <Messages />
      <People />
      <PhotoBuilder />
      <ThankYou />
    </>
  );
};
