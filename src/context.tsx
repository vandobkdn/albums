import React, { useCallback } from 'react';
import Albums from './resource/albums.json';
import Links from './resource/links.json';

type Link = 'travel' | 'wedding';

type Album = {
  name: string;
  album: string;
  type: Link;
  des: string;
  created: string;
  size: number;
};

type NavLink = { title: Link; label: string };

type State = {
  activeLink: Link;
  navLinks: NavLink[];
  chosenAlbum: Album | undefined;
  albums: Album[];
};

type Action =
  | { type: 'SET_ACTIVE_LINK'; payload: Link }
  | { type: 'SELECT_ALBUM'; payload: Album | undefined };

const Context = React.createContext<
  | {
      state: State;
      setActiveLink: (activeLink: Link) => void;
      selectAlbum: (chosenAlbum: Album | undefined) => void;
    }
  | undefined
>(undefined);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
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
    albums: Albums as Album[],
    navLinks: Links as NavLink[],
  });

  const setActiveLink = useCallback((activeLink: Link) => {
    dispatch({ type: 'SET_ACTIVE_LINK', payload: activeLink });
  }, []);

  const selectAlbum = useCallback((chosenAlbum: Album | undefined) => {
    dispatch({ type: 'SELECT_ALBUM', payload: chosenAlbum });
  }, []);

  return (
    <Context.Provider value={{ state, setActiveLink, selectAlbum }}>
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
