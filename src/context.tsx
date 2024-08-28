import React, { useCallback } from 'react';
import { Albums } from './albums';

type Album = {
  name: string;
  type: 'travel' | 'wedding';
  bio: string;
  createdAt: string;
  coverImage: string;
  photos: string[];
};

type State = {
  isOpenNavBar: boolean;
  chosenAlbum: Album | undefined;
  albums: Album[];
  chosenImage: string | undefined;
};

type Action =
  | { type: 'SET_OPEN_NAV_BAR'; payload: boolean }
  | { type: 'SELECT_ALBUM'; payload: Album | undefined }
  | { type: 'SELECT_IMAGE'; payload: string | undefined };

const Context = React.createContext<
  | {
      state: State;
      setIsOpenNavBar: (isOpenNavBar: boolean) => void;
      selectAlbum: (chosenAlbum: Album | undefined) => void;
      selectImage: (chosenImage: string | undefined) => void;
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
        chosenImage: undefined,
        chosenAlbum: action.payload,
      };
    }

    case 'SELECT_IMAGE': {
      return {
        ...state,
        chosenImage: action.payload,
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
    chosenImage: undefined,
    albums: Albums as Album[],
  });

  const setIsOpenNavBar = useCallback((isOpenNavBar: boolean) => {
    dispatch({ type: 'SET_OPEN_NAV_BAR', payload: isOpenNavBar });
  }, []);

  const selectAlbum = useCallback((chosenAlbum: Album | undefined) => {
    dispatch({ type: 'SELECT_ALBUM', payload: chosenAlbum });
  }, []);

  const selectImage = useCallback((chosenImage: string | undefined) => {
    dispatch({ type: 'SELECT_IMAGE', payload: chosenImage });
  }, []);

  return (
    <Context.Provider
      value={{ state, selectAlbum, selectImage, setIsOpenNavBar }}
    >
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
