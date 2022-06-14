import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

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
      'home': <WelcomeWorld navigationChangeHandler={navigationChangeHandler} />,
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
        {/* { router(page) || <ErrorPage>Some Aditional Info</ErrorPage> } */}
        <Switch>
          <Route path="/" exact component={WelcomeWorld} />
          <Route path="/games" exact component={Catalog} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/create" component={CreateGame} />
          <Route path="/games/:gameId" component={GameDetails} />
          <Route component={ErrorPage} />
        </Switch>
      </main>

    </div>
  );
}

export default App;
