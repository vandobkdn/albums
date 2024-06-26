import { lazy } from 'react';
import { Header } from './components/Header';
import { NavigationBar } from './components/NavigationBar';
import { useAppContext } from './context.tsx';
import { SideBar } from './components/SideBar';
import { Gallery } from './components/Gallery/Gallery.tsx';

const TravelAlbums = lazy(() => import('./components/TravelAlbums'));

function App() {
  const { chosenAlbum, isOpenNavBar } = useAppContext().state;

  return (
    <div className="root-container">
      <div className="app-header">
        <Header />
      </div>

      {isOpenNavBar && <SideBar />}

      <div className="app-main relative top-[-1px] overflow-y-auto">
        <NavigationBar />

        <main className="px-4">
          {!!chosenAlbum ? <Gallery /> : <TravelAlbums />}
        </main>
      </div>
    </div>
  );
}

export default App;
