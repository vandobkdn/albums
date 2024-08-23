import { lazy } from 'react';
import { Header } from './components/Header';
import { NavigationBar } from './components/NavigationBar';
import { useAppContext } from './context.tsx';
import { SideBar } from './components/SideBar';
import { Gallery } from './components/Gallery/Gallery.tsx';
import { View } from './primitives';

const TravelAlbums = lazy(() => import('./components/TravelAlbums'));

function App() {
  const { chosenAlbum, isOpenNavBar } = useAppContext().state;

  return (
    <View className="root-container">
      <View className="app-header">
        <Header />
      </View>

      {isOpenNavBar && <SideBar />}

      <View className="app-main relative top-[-1px] overflow-y-auto">
        <NavigationBar />

        <View tag="main" className="px-4">
          {!!chosenAlbum ? <Gallery /> : <TravelAlbums />}
        </View>
      </View>
    </View>
  );
}

export default App;
