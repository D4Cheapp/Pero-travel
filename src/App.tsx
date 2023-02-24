import React from "react";
import {Route, Routes} from "react-router-dom";

import Home from "./components/home/Home";
import NotFoundPage from "./components/NotFoundPage";
import Excursions from "./components/excursions/Excursions";
import Profile from "./components/profile/Profile";
import RouterOutlet from "./components/RouterOutlet";

function App(): JSX.Element {
    return (
        <Routes>
            <Route path='/' element={<RouterOutlet/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='excursions' element={<Excursions/>}/>
                <Route path='profile' element={<Profile/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    )
}

export default App