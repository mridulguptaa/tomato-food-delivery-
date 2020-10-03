import React from 'react';

const RestaurantList = (props) =>{
    // console.log("props are ", props);
    const name = props.name || "default name";
    const price = props.price || 0;
    const distance = props.distance || 0;
    return(
        <div>
            <h1>Restaurant {name}</h1>
            <p>Per person: Rs. {price}</p>
            <p>Distance: {distance} km</p>
        </div>
    );
}

export default RestaurantList;
