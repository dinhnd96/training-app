import Home from './Pages/Home'
import Loggin from './Pages/Loggin'
import SignUp from './Pages/Register'
import AddValue from './Pages/AddValue'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/loggin">
              <Loggin />
            </Route>
            <Route path="/register">
              <SignUp />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/addvalue">
              <AddValue/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
