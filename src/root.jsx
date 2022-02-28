import React from "react";
import Clock from "./clock";
import Tabs from "./tabs";

const panes = [
    {title: "One", content: "Sean, First Child"},
    {title: "Two", content: "Danny, Second Child"},
    {title: "Three", content: "Ariana, Third Child"}
];

function Root() {
    return(
        <div>
            <Clock />
            <Tabs panes={panes} />
        </div>
    )
};

export default Root;