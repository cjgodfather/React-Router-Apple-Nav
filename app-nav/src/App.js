import React from "react";

import "./App.css";
import { Route } from "react-router-dom";
import NavWrapper from "./components/NavWrapper";

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavWrapper}></Route>
    </div>
  );
}

export default App;
