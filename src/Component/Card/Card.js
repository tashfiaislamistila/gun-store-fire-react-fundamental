import React from 'react';
import './Card.css'
const Card = ({ gunData }) => {
    // console.log(props.gunData);
    const { name, img, bullet, capacity, action, price } = gunData;
    console.log(gunData);
    return (
        <div className='card'>
            <div className='image-container'>
                <img src={img} alt="" />
            </div>
            <h1>{name}</h1>
            <p>Bullet Type: {bullet}</p>
            <p>Capacity :{capacity}</p>
            <p>Capacity :{action}</p>
            <div className='add-to-cart'>
                <button>Add to Cart</button>
                <h1>$ {price}</h1>
            </div>
        </div>
    );
};

export default Card;