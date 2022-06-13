import { useState } from 'react';

import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld';
import Login from './components/Login';
import Register from './components/Register';
import GameDetails from './components/GameDetails';
import Catalog from './components/Catalog';
import CreateGame from './components/CreateGame';
import EditGame from './components/EditGame';

function App() {
  const [page, setPage] = useState('/home');

  const routes = {
    '/home': <WelcomeWorld />,
    '/games': <Catalog />,
    '/login': <Login />,
    '/register': <Register />,
    '/create': <CreateGame />
  }

  const navigationChangeHandler = (path) => {
    setPage(path);
  }

  return (
    <div id="box">
      <Header navigationChangeHandler={navigationChangeHandler} />

      <main id="main-content">
        { routes[page] || <h2>No Page Found!!!</h2> }
      </main>

    </div>
  );
}

export default App;
