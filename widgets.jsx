import ReactDOM from "react-dom";
import React from "react";
import Root from "./src/root";
import Clock from "./src/clock"; 

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    debugger
    ReactDOM.render(<Root />, main)
});