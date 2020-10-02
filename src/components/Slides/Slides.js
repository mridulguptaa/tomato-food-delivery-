import React,{Component,Fragment} from 'react';
import './Slides.css'

const Slides = () =>{
	return(
        <div>
            <div id="carouselExampleIndicators" class="carousel slide size" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://cdn.grabon.in/gograbon/images/category/1546252575451.png" class="d-block w-100" style = {{height:730}}  />
                </div>
                <div class="carousel-item">
                <img src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1591771548178/food-coupons.jpg" class="d-block w-100" style = {{height:730}}  />
                </div>
                <div class="carousel-item">
                <img src="https://www.madrascurrycup.com/images/grab-now/Offer-ad.jpg" class="d-block w-100" style = {{height:730}}  />
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
        </div>
			);
}

export default Slides;

