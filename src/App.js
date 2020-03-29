import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/TopBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./asset/style.css";
import FooterComponent from "./components/FooterComponent";
import "react-toastify/dist/ReactToastify.min.css";
import Payment from "./pages/Payment";
import Breeder from "./pages/Breeder";
import Registerbreeder from "./pages/RegisterBreeder";
import PaymentDetail from "./pages/Paymentresume";
import InvestationList from "./pages/Investation";
import Aboutus from "./pages/Aboutus";

import Loginbreeder from "./pages/LoginBreeder";
import Detail from "./pages/Detail";
import LiveeStock from "./pages/LiveeStock";
import Profile from "./pages/Profile";
import Contactsus from "./pages/ContactUs";
import "react-toastify/dist/ReactToastify.min.css";
// import Breeders from "./pages/Breeders";
import Payments from "./components/payment/Payments";

import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    // <Provider store={store}>
    <div className="App">
      <TopBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/livestock" component={LiveeStock} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="/payment" component={Payment} />
          <Route path="/breeder" component={Breeder} />
          <Route path="/loginbreeder" component={Loginbreeder} />
          <Route path="/registerbreeder" component={Registerbreeder} />
          <Route path="/paymentresume" component={PaymentDetail} />
          <Route path="/investationlist" component={InvestationList} />
          <Route path="/contactus" component={Contactsus} />
          <Route path="/aboutus" component={Aboutus} />
        </Switch>
      </Router>
      <FooterComponent />
    </div>
    // </Provider>
  );
}

export default App;
