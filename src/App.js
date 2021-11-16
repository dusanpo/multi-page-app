import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import Main from "./components/main/Main";
import ActressesMain from "./components/actressesMain/ActressesMain";
import ToDoMain from "./components/toDoMain/ToDoMain";
import LoremIpsumMain from "./components/loremIpsumMain/LoremIpsumMain";

function App() {
  return (
    <Router>
      <div>
        <NavbarComp />
        <Switch>
          <Route exact path="/actressesMain" component={ActressesMain} />

          <Route exact path="/toDoMain" component={ToDoMain} />

          <Route exact path="/loremIpsumMain" component={LoremIpsumMain} />

          <Route path="/" component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
