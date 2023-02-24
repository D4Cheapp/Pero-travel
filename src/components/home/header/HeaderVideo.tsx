import React from 'react';

import rifting from '@img/home/videos/rifting.png'
import cliffs from '@img/home/videos/cliffs.png'

import HeaderVideoCard from "./HeaderVideoCard";

const HeaderVideo = () => {
    return (
        <div className="header-videos">
            {[rifting,cliffs].map((image,index) => <HeaderVideoCard image={image} key={index}/>)}
        </div>
    );
};

export default HeaderVideo;