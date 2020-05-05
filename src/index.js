import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//router import main setup
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>
, document.getElementById("root"));
