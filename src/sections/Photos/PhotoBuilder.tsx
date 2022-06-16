import React from 'react';
import { PhotoGrid } from './PhotoGrid';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import * as A1Photos from 'src/assets/1A';
import * as B1Photos from 'src/assets/1B';
import * as WKT1Photos from 'src/assets/WKT1';
import * as A2Photos from 'src/assets/2A';
import * as WKT2Photos from 'src/assets/WKT2';
import * as B2Photos from 'src/assets/2B';
import * as WKT3Photos from 'src/assets/WKT3';
import * as A3Photos from 'src/assets/3A';
import * as WKT4Photos from 'src/assets/WKT4';
import * as B3Photos from 'src/assets/3B';
import * as WKT5Photos from 'src/assets/WKT5';
import * as A4Photos from 'src/assets/4A';
import * as WKT6Photos from 'src/assets/WKT6';
import * as B4Photos from 'src/assets/4B';

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
  {
    title: '2B. Summer 2019',
    photos: B2Photos,
  },
  {
    title: 'WKT3. Fall 2019',
    photos: WKT3Photos,
  },
  {
    title: '3A. Winter 2020',
    photos: A3Photos,
  },
  {
    title: 'WKT4. Summer 2020',
    photos: WKT4Photos,
  },
  {
    title: '3B. Fall 2020',
    photos: B3Photos,
  },
  {
    title: 'WKT5. Winter 2021',
    photos: WKT5Photos,
  },
  {
    title: '4A. Summer 2021',
    photos: A4Photos,
  },
  {
    title: 'WKT6. Fall 2021',
    photos: WKT6Photos,
  },
  {
    title: '4B. Winter 2022',
    photos: B4Photos,
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
