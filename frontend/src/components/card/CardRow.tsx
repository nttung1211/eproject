import React, { createContext, Dispatch, FC, SetStateAction, useState } from 'react';
import Film from '../../models/Film';
import { StyledCardRow } from './Card.styled';

interface CardFeatureState {
  showFeature: boolean;
  setShowFeature: Dispatch<SetStateAction<boolean>>;
  itemFeature: Film | null;
  setItemFeature: Dispatch<SetStateAction<Film | null>>;
}

export const CardFeatureContext = createContext({} as CardFeatureState);

interface Props {}

const CardRow: FC<Props> = ({ children }) => {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState<Film | null>(null);

  return (
    <CardFeatureContext.Provider
      value={{
        showFeature,
        setShowFeature,
        itemFeature,
        setItemFeature,
      }}
    >
      <StyledCardRow>{children}</StyledCardRow>
    </CardFeatureContext.Provider>
  );
};

export default CardRow;
