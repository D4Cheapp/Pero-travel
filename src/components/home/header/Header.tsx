import React from "react"
import headerBackground from '@img/home/headerBackground.png'

import HeaderVideo from "./HeaderVideo";
import HeaderSocialMedia from "./HeaderSocialMedia";
import {Link} from "react-router-dom";

function HomeHeader(): JSX.Element{
    return (
        <header style={{backgroundImage: `url(${headerBackground})`}}>
            <div className='motto'>
                <h1 className='motto__title__first'>ПУТЕШЕСТВУЙ</h1>
                <h2 className='motto__title__second'>вместе с</h2>
                <h1 className='motto__title__third'>PERO TRAVEL</h1>
            </div>

            <HeaderSocialMedia/>
            <Link to='/excursions' className="header__excursions-button">К экскурсиям →</Link>
            <HeaderVideo/>
        </header>
    )
}

export default HomeHeader