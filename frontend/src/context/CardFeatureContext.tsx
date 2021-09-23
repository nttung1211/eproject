import React, { createContext, Dispatch, FC, SetStateAction, useContext, useState } from 'react';
import Film from '../models/Film';

interface CardFeatureState {
  showFeature: boolean;
  setShowFeature: Dispatch<SetStateAction<boolean>>;
  itemFeature: Film | null;
  setItemFeature: Dispatch<SetStateAction<Film | null>>;
}

const CardFeatureContext = createContext({} as CardFeatureState);

const CardFeatureContextProvider: FC = ({ children }) => {
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
      {children}
    </CardFeatureContext.Provider>
  );
};
export default CardFeatureContextProvider;

export const useCardFeatureContext = () => {
  const context = useContext(CardFeatureContext);
  if (context === undefined) {
    throw new Error("useCardFeatureContext must be use with in an CardFeatureContextProvider");
  }
  return context;
}
