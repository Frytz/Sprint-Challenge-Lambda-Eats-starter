import React from "react";
import Home from "./components/Home";
import { Route } from "react-router-dom";
import Form from "./components/Form"

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <Route exact path="/" component={Home} />
      <Route path="/form" component={Form} />
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
