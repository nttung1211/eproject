import React, { FC } from 'react';
import OptForm from '../optForm/OptForm';
import { FeatureTitle, FeatureSubTitle } from './Feature.styled';
import { FeatureContainer } from './Feature.styled';

interface Props {}

const Feature: FC<Props> = () => {
  return (
    <FeatureContainer>
      <FeatureTitle>Unlimited movies, TV shows, and more.</FeatureTitle>
      <FeatureSubTitle>Watch anywhere. Cancel at any time.</FeatureSubTitle>
      <OptForm />
    </FeatureContainer>
  );
};

export default Feature;
