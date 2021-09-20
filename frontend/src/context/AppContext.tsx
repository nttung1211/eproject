import React, { createContext, Dispatch, FC, SetStateAction, useContext, useState } from 'react';
import Film from '../models/Film';
import User from '../models/User';

interface AppState {
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
  showPlayer: boolean;
  setShowPlayer: Dispatch<SetStateAction<boolean>>;
  playingFilm: Film | null;
  setPlayingFilm: Dispatch<SetStateAction<Film | null>>;
}

const AppContext = createContext({} as AppState);

const AppContextProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [showPlayer, setShowPlayer] = useState(false);
  const [playingFilm, setPlayingFilm] = useState<Film | null>(null);
  
  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        showPlayer,
        setShowPlayer,
        playingFilm,
        setPlayingFilm,
      }}
    >
      {children}
    </AppContext.Provider>
  )
};

export default AppContextProvider;

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be use with in an AppContextProvider");
  }
  return context;
}


