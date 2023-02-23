import React from "react";
import Home from "./components/home/Home";
import NavBar from "./components/NavBar";

function App(): JSX.Element {
    return (
        <>
            <NavBar/>
            <Home/>
        </>
    )
}

export default App