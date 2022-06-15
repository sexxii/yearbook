import React from 'react';
import { PhotoGrid } from './PhotoGrid';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import * as A1Photos from 'src/assets/1A';
import * as B1Photos from 'src/assets/1B';
import * as WKT1Photos from 'src/assets/WKT1';
import * as A2Photos from 'src/assets/2A';
import * as WKT2Photos from 'src/assets/WKT2';

const sections = [
  {
    title: '1A. Fall 2017',
    photos: A1Photos,
  },
  {
    title: '1B. Winter 2018',
    photos: B1Photos,
  },
  {
    title: 'WKT1. Summer 2018',
    photos: WKT1Photos,
  },
  {
    title: '2A. Fall 2018',
    photos: A2Photos,
  },
  {
    title: 'WKT2. Winter 2019',
    photos: WKT2Photos,
  },
];

export const PhotoBuilder = () => {
  return (
    <>
      {sections.map((section) => {
        return (
          <PhotoGrid
            key={section.title}
            title={section.title}
            photos={section.photos}
          />
        );
      })}
    </>
  );
};
