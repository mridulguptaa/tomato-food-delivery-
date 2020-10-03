import React from 'react';
import './RestaurantList.css'

const RestaurantList = (props) =>{
    // console.log("props are ", props);
    const name = props.name || "default name";
    const price = props.price || 0;
    const distance = props.distance || 0;
    return(
        <div>
            <div class="card card-size">
                <img class="card-img-top" src="https://images.herzindagi.info/image/2019/Jan/italian-restaurant-delhi-main.jpg" alt="Visit"></img>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">Dal Handi badhiya hai hamari</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Per Person Cost : Rs.{price}</li>
                    <li class="list-group-item">Distance : {distance} km</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Visit Restaurant</a>
                </div>
            </div>
        </div>

    );
}

export default RestaurantList;
