import React from "react"
import headerBackground from '@img/home/headerBackground.png'

import vk from '@img/home/socialMedia/vk.png'
import instagram from '@img/home/socialMedia/instagram.png'
import facebook from '@img/home/socialMedia/facebook.png'

import rifting from '@img/home/videos/rifting.png'
import cliffs from '@img/home/videos/cliffs.png'

function HomeHeader(): JSX.Element{
    return (
        <header style={{backgroundImage: `url(${headerBackground})`}}>
            <div className='motto'>
                <h1 className='motto__title__first'>ПУТЕШЕСТВУЙ</h1>
                <h2 className='motto__title__second'>вместе с</h2>
                <h1 className='motto__title__third'>PERO TRAVEL</h1>
            </div>

            <div className="header-social-media">
                <a href='https://vk.com' style={{backgroundImage: `url(${vk})`}}
                     className="header-social-media__icon-link"/>
                <a href='https://instagram.com' style={{backgroundImage: `url(${instagram})`}}
                     className="header-social-media__icon-link header-social-media__icon-link__instagram"/>
                <a href='http://facebook.com' style={{backgroundImage: `url(${facebook})`}}
                     className="header-social-media__icon-link"/>
            </div>

            <a href='/excursions' className="header__excursions-button">К экскурсиям →</a>

            <div className="header-videos">
                <img src={rifting} alt="" className="header-videos__video"/>
                <img src={cliffs} alt="" className="header-videos__video"/>
            </div>
        </header>
    )
}

export default HomeHeader