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
    quotes: [
      'Prof Mansour called my name and took me on the class stage and asked me to run into the wall and not slow down as I approached the wall.',
      'Austin falling off his chair in MATH 115 and Faustin telling him do not get too much excited.',
      'Falling off my chair in MATH115',
    ],
  },
  {
    title: '1B. Winter 2018',
    photos: B1Photos,
    quotes: [
      '-30 degrees in Montreal, first year: it is 4am and I am arguing with a taxi driver on how much he would charge if an unnamed SE yaks in his car. He still has not paid me back.',
      'The time someone ended up blacking out and going to the hospital at CUSEC in our 1B term.',
    ],
  },
  {
    title: 'WKT1. Summer 2018',
    photos: WKT1Photos,
    quotes: [
      'A bunch of the boys showed up to Montreal. We ended up bar hopping and playing LaserQuest drunk! ',
    ],
  },
  {
    title: '2A. Fall 2018',
    photos: A2Photos,
    quotes: ['Rodolfo exposing his desktop background  ♥w♥'],
  },
  {
    title: 'WKT2. Winter 2019',
    photos: WKT2Photos,
  },
  {
    title: '2B. Summer 2019',
    photos: B2Photos,
    quotes: [
      'Watching Spiderman Far From Home after bombing the Math 239 final',
    ],
  },
  {
    title: 'WKT3. Fall 2019',
    photos: WKT3Photos,
  },
  {
    title: '3A. Winter 2020',
    photos: A3Photos,
    quotes: [
      'SE 350: Staying in the OS lab with so many other SE groups till 4AM, eating, and being frustrated at the lab but still having fun',
      'Working on the OS lab when school got cancelled and immediately going to LCBO.',
    ],
  },
  {
    title: 'WKT4. Summer 2020',
    photos: WKT4Photos,
  },
  {
    title: '3B. Fall 2020',
    photos: B3Photos,
    quotes: [
      'Going out for sushi with friends after exams every term. Sometimes with a large group, sometimes with just a single friend, but the sushi always seemed to taste better seasoned with the shared relief of surviving yet another ordeal.',
    ],
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
    quotes: [
      'Falling asleep in every single class in the front row.',
      'Watching my friends fall asleep in class',
    ],
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
            quotes={section.quotes}
          />
        );
      })}
    </>
  );
};
