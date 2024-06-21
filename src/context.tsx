import React, { useCallback } from 'react';

import { Album } from './types';

type State = {
  activeLink: 'travel' | 'wedding';
  chosenAlbum: Album | undefined;
  albums: Album[] | undefined;
};

type Action =
  | { type: 'SET_ALBUMS'; payload: Album[] | undefined }
  | { type: 'SET_ACTIVE_LINK'; payload: 'travel' | 'wedding' }
  | { type: 'SELECT_ALBUM'; payload: Album | undefined };

const Context = React.createContext<
  | {
      state: State;
      setAlbums: (albums: Album[] | undefined) => void;
      setActiveLink: (activeLink: 'travel' | 'wedding') => void;
      selectAlbum: (chosenAlbum: Album | undefined) => void;
    }
  | undefined
>(undefined);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_ALBUMS': {
      return {
        ...state,
        albums: action.payload,
      };
    }

    case 'SET_ACTIVE_LINK': {
      return {
        ...state,
        activeLink: action.payload,
      };
    }

    case 'SELECT_ALBUM': {
      return {
        ...state,
        chosenAlbum: action.payload,
      };
    }

    default:
      return state;
  }
};

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(reducer, {
    activeLink: 'travel',
    chosenAlbum: undefined,
    albums: [],
  });

  const setAlbums = useCallback((albums: Album[] | undefined) => {
    dispatch({ type: 'SET_ALBUMS', payload: albums });
  }, []);

  const setActiveLink = useCallback((activeLink: 'travel' | 'wedding') => {
    dispatch({ type: 'SET_ACTIVE_LINK', payload: activeLink });
  }, []);

  const selectAlbum = useCallback((chosenAlbum: Album | undefined) => {
    dispatch({ type: 'SELECT_ALBUM', payload: chosenAlbum });
  }, []);

  return (
    <Context.Provider value={{ state, setAlbums, setActiveLink, selectAlbum }}>
      {children}
    </Context.Provider>
  );
};

const useAppContext = () => {
  const context = React.useContext(Context);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

export { ContextProvider, useAppContext };
