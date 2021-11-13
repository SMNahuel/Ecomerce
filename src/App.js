import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";


function App() {
  return (
    <Router>
        <Switch>
          <Route path="/register">
            
          </Route>
          <Route path="/login">
            
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
