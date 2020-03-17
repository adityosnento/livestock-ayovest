import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/TopBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./asset/style.css";
import FooterComponent from "./components/FooterComponent";

import Detail from "./pages/Detail";
import LiveeStock from "./pages/LiveeStock";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail" component={Detail} />
          <Route path="/livestock" component={LiveeStock} />
        </Switch>
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App;
