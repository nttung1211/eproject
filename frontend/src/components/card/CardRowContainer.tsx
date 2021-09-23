import React, { FC } from 'react';
import CardFeatureContextProvider from '../../context/CardFeatureContext';
import { StyledCardRowContainer } from './Card.styled';

interface Props {
  marginTop: number;
}

const CardRowContainer: FC<Props> = ({ children, marginTop }) => {
  return (
    <CardFeatureContextProvider>
      <StyledCardRowContainer marginTop={marginTop}>{children}</StyledCardRowContainer>
    </CardFeatureContextProvider>
  );
};

export default CardRowContainer;
