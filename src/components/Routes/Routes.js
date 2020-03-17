import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Mainpage from "../MainPage/Mainpage";
import User from "../Auth/PersonalDetail/PersonalDetail";

// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas, fab);

export default function Routes() {
  return (
    <Router>
      <Route path="/" exact>
        <div className="display">
          <Mainpage />
        </div>
      </Route>

      <Route path="/userprofile">
        <div className="display">
          <User />
        </div>
      </Route>

    
    </Router>
  );
}
