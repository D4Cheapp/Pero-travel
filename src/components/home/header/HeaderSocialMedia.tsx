import React from 'react';

import vk from '@img/home/socialMedia/vk.png'
import instagram from '@img/home/socialMedia/instagram.png'
import facebook from '@img/home/socialMedia/facebook.png'

const HeaderSocialMedia = () => {
    return (
        <div className="header-social-media">
            <a href='https://vk.com' style={{backgroundImage: `url(${vk})`}}
               className="header-social-media__icon-link"/>
            <a href='https://instagram.com' style={{backgroundImage: `url(${instagram})`}}
               className="header-social-media__icon-link header-social-media__icon-link__instagram"/>
            <a href='http://facebook.com' style={{backgroundImage: `url(${facebook})`}}
               className="header-social-media__icon-link"/>
        </div>
    );
};

export default HeaderSocialMedia;