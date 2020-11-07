import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Zoos from "./Zoos";

const Home = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

const Species = () => {
  return (
    <div>
      <h2>Species</h2>
    </div>
  );
};

function App() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/zoos">Zoos</Link>
          </li>
          <li>
            <Link to="/species">Species</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/zoos"><Zoos /></Route>
        <Route path="/species"><Species /></Route>
      </Switch>
    </div>
  );
}

export default App;
