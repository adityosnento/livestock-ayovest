import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/TopBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./asset/style.css";
import FooterComponent from "./components/FooterComponent";
import "react-toastify/dist/ReactToastify.min.css";
<<<<<<< HEAD
import Payment from "./pages/Payment"
import Breeder from './pages/Breeder'
=======
import Payment from "./pages/Payment";
>>>>>>> 37322a496db2ad6e0678c3a4155d9a9e38012f6a

import Loginbreeder from './pages/LoginBreeder'
import Detail from "./pages/Detail";
import LiveeStock from "./pages/LiveeStock";
import Profile from "./pages/Profile";
import "react-toastify/dist/ReactToastify.min.css";
import Breeders from "./pages/Breeders";


function App() {
  return (
    <div className="App">
      <TopBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/livestock" component={LiveeStock} />
          <Route path="/profile/:id" component={Profile} />
<<<<<<< HEAD
          <Route path="/payment" component={Payment}/>
          <Route path="/breeder" component={Breeder}/>
          <Route path="/loginbreeder" component={Loginbreeder}/>
=======
          <Route path="/payment" component={Payment} />
          <Route path="/breeder" component={Breeders} />
>>>>>>> 37322a496db2ad6e0678c3a4155d9a9e38012f6a
        </Switch>
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App;
