import React, { useCallback } from 'react';
import Albums from './resource/albums.json';

type Album = {
  name: string;
  album: string;
  type: 'travel' | 'wedding';
  des: string;
  created: string;
  size: number;
};

type State = {
  isOpenNavBar: boolean;
  chosenAlbum: Album | undefined;
  albums: Album[];
};

type Action =
  | { type: 'SET_OPEN_NAV_BAR'; payload: boolean }
  | { type: 'SELECT_ALBUM'; payload: Album | undefined };

const Context = React.createContext<
  | {
      state: State;
      setIsOpenNavBar: (isOpenNavBar: boolean) => void;
      selectAlbum: (chosenAlbum: Album | undefined) => void;
    }
  | undefined
>(undefined);

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_OPEN_NAV_BAR': {
      return {
        ...state,
        isOpenNavBar: action.payload,
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
    isOpenNavBar: false,
    chosenAlbum: undefined,
    albums: Albums as Album[],
  });

  const setIsOpenNavBar = useCallback((isOpenNavBar: boolean) => {
    dispatch({ type: 'SET_OPEN_NAV_BAR', payload: isOpenNavBar });
  }, []);

  const selectAlbum = useCallback((chosenAlbum: Album | undefined) => {
    dispatch({ type: 'SELECT_ALBUM', payload: chosenAlbum });
  }, []);

  return (
    <Context.Provider value={{ state, selectAlbum, setIsOpenNavBar }}>
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
