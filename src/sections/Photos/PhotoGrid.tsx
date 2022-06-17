import React, { useEffect, useState } from 'react';
import Gallery from 'react-photo-gallery';

import { Heading2 } from '../../components/Typography/Heading2';
import { Section } from 'src/components/Grid/Section';
import { Content } from 'src/components/Grid/Content';
import { CenterAlign } from 'src/components/Grid/CenterAlign';
import { BallTriangle } from 'react-loader-spinner';
import ImageGallery from 'react-image-gallery';
import shuffle from 'lodash/shuffle';
import { Memory } from 'src/components/Typography/Memory';

type Props = {
  title: string;
  quotes?: string[];
  photos: { [key: string]: string };
};

function formatImages(photos: { [key: string]: string }) {
  const formattedPhotos = [];
  for (const src of Object.values(photos)) {
    formattedPhotos.push({
      original: src,
      thumbnail: src,
    });
  }

  return shuffle(formattedPhotos);
}

function formatQuotes(quotes: string[]) {
  const formattedQuotes: JSX.Element[] = [];
  quotes.forEach((quote) => {
    formattedQuotes.push(<Memory>{quote}</Memory>);
  });
  return formattedQuotes;
}

export const PhotoGrid = ({ title, quotes = [], photos }: Props) => {
  const formattedPhotos = formatImages(photos);

  const quoteElements = formatQuotes(quotes);

  return (
    <Section bgColor="#f3f3f3">
      <Content>
        <Heading2>{title}</Heading2>
        {quoteElements}
        <ImageGallery items={formattedPhotos} showNav={false} />
      </Content>
    </Section>
  );
};
