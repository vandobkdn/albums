import { lazy } from 'react';
import { Header } from './components/Header';
import { NavigationBar } from './components/NavigationBar';
import { useAppContext } from './context.tsx';
import { SideBar } from './components/SideBar';

const Travels = lazy(() => import('./components/TravelAlbums'));
const Wedding = lazy(() => import('./wedding.tsx'));

function App() {
  const {
    state: { isOpenNavBar },
  } = useAppContext();

  return (
    <div className="root-container">
      <div className="app-header">
        <Header />
      </div>

      {isOpenNavBar && <SideBar />}

      <div className="app-main relative overflow-y-auto px-4">
        <NavigationBar />

        {/* <Travels /> */}
        <Wedding />
      </div>
    </div>
  );
}

export default App;
