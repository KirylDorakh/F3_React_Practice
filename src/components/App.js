import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

import "../style/App.css"

import Clock from "./Clock"
import ToDOList from "./ToDOList";

function App(props){
    return (
        <>
            <Clock />
            <ToDOList />
        </>
    )
}

export default App;