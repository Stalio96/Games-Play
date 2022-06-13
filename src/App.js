import { useState } from 'react';

import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld';
import Login from './components/Login';
import Register from './components/Register';
import GameDetails from './components/GameDetails';
import Catalog from './components/GameCatalog/Catalog';
import CreateGame from './components/CreateGame';
// import EditGame from './components/EditGame';
import ErrorPage from './components/ErrorPage';

function App() {
  const [page, setPage] = useState('/home');
  
  const navigationChangeHandler = (path) => {
    setPage(path);
  }
  
  const router = (path) => {
    let pathNames = path.split('/');
    
    let rootPath = pathNames[1];
    let argument = pathNames[2];
    
    const routes = {
      'home': <WelcomeWorld />,
      'games': <Catalog navigationChangeHandler={navigationChangeHandler} />,
      'login': <Login />,
      'register': <Register />,
      'create': <CreateGame />,
      'details': <GameDetails id={argument} />
    }

    return routes[rootPath];
  }
  
  return (
    <div id="box">
      <Header navigationChangeHandler={navigationChangeHandler} />

      <main id="main-content">
        { router(page) || <ErrorPage>Some Aditional Info</ErrorPage> }
      </main>

    </div>
  );
}

export default App;
