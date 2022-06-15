import React, { useEffect, useState } from 'react';
import Gallery from 'react-photo-gallery';

import { Heading2 } from '../../components/Typography/Heading2';
import { Section } from 'src/components/Grid/Section';
import { Content } from 'src/components/Grid/Content';
import { CenterAlign } from 'src/components/Grid/CenterAlign';
import { BallTriangle } from 'react-loader-spinner';

import shuffle from 'lodash/shuffle';

import * as APhotos from 'src/assets/1A';

type Props = {
  title: string;
  photos: { [key: string]: string };
};

async function formatImages(photos: { [key: string]: string }) {
  const formattedPhotos = [];
  for (const [k, src] of Object.entries(photos)) {
    const img = new Image();
    img.src = src;
    await img.decode();

    formattedPhotos.push({
      src: src,
      width: img.width,
      height: img.height,
    });
  }

  return shuffle(formattedPhotos);
}

type FormattedPhoto = {
  src: string;
  width: number;
  height: number;
};

export const PhotoGrid = ({ title, photos }: Props) => {
  const [loading, setLoading] = useState(true);
  const [valueA, setValueA] = useState<FormattedPhoto[]>([]);

  async function getA() {
    try {
      setLoading(true);
      const responseA = await formatImages(photos);
      setValueA(responseA);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getA();
  }, []);

  return (
    <Section bgColor="#f3f3f3">
      <Content>
        <Heading2>{title}</Heading2>
        {loading ? (
          <CenterAlign>
            <BallTriangle
              height="200"
              width="200"
              color="grey"
              ariaLabel="loading"
            />
          </CenterAlign>
        ) : (
          <Gallery photos={valueA} targetRowHeight={200} />
        )}
      </Content>
    </Section>
  );
};
