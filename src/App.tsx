import { useAppContext } from './context';
import { View } from './primitives';
import {
  Header,
  NavigationBar,
  SideBar,
  Gallery,
  TravelAlbums,
} from './components';

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
