import { lazy, Suspense } from 'react';
import Modal from './modal.tsx';
import Header from './header.tsx';
import { useAppContext } from './context.tsx';

const Travels = lazy(() => import('./travel.tsx'));
const Wedding = lazy(() => import('./wedding.tsx'));

function App() {
  const {
    state: { activeLink, chosenAlbum },
  } = useAppContext();

  return (
    <div className="h-full w-full p-5 md:px-16 md:py-4 bg-white">
      <Header />

      <Suspense fallback={<h1>Loading....</h1>}>
        {activeLink === 'travel' && <Travels />}
        {activeLink === 'wedding' && <Wedding />}
      </Suspense>

      <Modal isOpen={!!chosenAlbum} />
    </div>
  );
}

export default App;
