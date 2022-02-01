import "./App.css";
import Footer from "./views/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./views/Homepage/Homepage";

function App() {
  return (
    <Router>
      <div className="App">
        <Footer />
        <div className="content">
          <Switch>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
