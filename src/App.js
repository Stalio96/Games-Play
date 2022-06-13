import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld';
import Login from './components/Login';
import Register from './components/Register';
import GameDetails from './components/GameDetails';
import Catalog from './components/Catalog';
import CreateGame from './components/CreateGame';
import EditGame from './components/EditGame';

function App() {
  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <WelcomeWorld />
      </main>

    </div>
  );
}

export default App;
