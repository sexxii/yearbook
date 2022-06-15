import React, { useEffect, useState } from 'react';
import Gallery from 'react-photo-gallery';
import styled from 'styled-components';
import { Heading2 } from '../../components/Typography/Heading2';

import Photo1 from '../../assets/1A/B4035DF9-6C62-4B57-BF96-C3852C82E96B.jpg';
import Photo2 from '../../assets/1A/FB_IMG_1505128211746.jpg';
import shuffle from 'lodash/shuffle';

// import * as APhotos from '../../assets/1A';

import * as APhotos from 'src/assets/1A';
import { useFormatImages } from './useFormatImages';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

type Props = {
  title: string;
};

async function formatImages(photos: { [key: string]: string }) {
  const formattedPhotos = [];
  for (const [k, src] of Object.entries(photos)) {
    const img = new Image();
    // let height, width;
    img.src = src;
    await img.decode();
    // img.onload = function () {
    //   console.log(this.width);
    //   (height = this.height), (width = this.width);
    // };
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

export const Photos = ({ title }: Props) => {
  const [loading, setLoading] = useState(true);
  const [valueA, setValueA] = useState<FormattedPhoto[]>([]);
  const photos = [
    {
      src: Photo1,
      width: 521,
      height: 652,
    },
    {
      src: Photo2,
      width: 3,
      height: 2,
    },
  ];

  async function getA() {
    try {
      setLoading(true);
      const responseA = await formatImages(APhotos);
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

  // const formatted = await useFormatImages(APhotos);
  // console.log(formatted);

  return (
    <Wrapper>
      <Heading2>{title}</Heading2>
      {loading ? (
        'Loading...'
      ) : (
        <Gallery photos={valueA} targetRowHeight={200} />
      )}
    </Wrapper>
  );
};
