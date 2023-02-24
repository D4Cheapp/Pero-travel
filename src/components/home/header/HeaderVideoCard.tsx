import React from 'react';

interface CardPropsInterface{
    image : string
}
const HeaderVideoCard = (props : CardPropsInterface) => {
    return (
        <div className='header-video-card'>
            <div className='header-video-card__blackout'/>
            <img src={props.image} alt='' className='header-video-card__preview'/>
        </div>
    );
};

export default HeaderVideoCard;