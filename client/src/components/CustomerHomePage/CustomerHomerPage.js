import React,{Component,Fragment} from 'react';
import RestaurantList from '../RestaurantList/RestaurantList';
import SearchBox from '../SearchBox/SearchBox';
import Slides from '../Slides/Slides';
import UserLogin from '../UserLogin/UserLogin';
import UserSignUp from '../UserSignUp/UserSignUp';
import './CustomerHomePage.css';

const CustomerHomePage = () =>{
	return(
                <div className="background">
                        <nav class="navbar navbar-dark bg-dark ">
                                <a class="navbar-brand " href="#">
                                        <h2>Tomato</h2>
                                </a>
                                <button type="button" class="btn btn-outline-secondary btn-lg white-border text-white" style = {{marginLeft : "auto"}} data-toggle="modal" data-target="#login">
                                Login
                                </button>
                                <button type="button" class="btn btn-outline-secondary btn-lg white-border text-white"   data-toggle="modal" data-target="#signup" >
                                Sign Up
                                </button>
                                
                               
                        </nav>   
                <UserLogin>

                </UserLogin>
                <UserSignUp>

                </UserSignUp>
                <Slides>

                </Slides>

                <div class="row">
                        <div class="col">
                        <RestaurantList name = {"A"} price = {200} distance = {5}></RestaurantList>
                        </div>
                        <div class="col">
                        <RestaurantList name = {"B"} price = {500} distance = {10}></RestaurantList>
                        </div>
                        <div class="col">
                        <RestaurantList name = {"C"} price = {500} distance = {10}></RestaurantList>
                        </div>
                        <div class="col">
                        <RestaurantList name = {"D"} price = {500} distance = {10}></RestaurantList>
                        </div>
                </div>

                <br></br>
                <div class="row">
                        <div class="col">
                        <RestaurantList name = {"A"} price = {200} distance = {5}></RestaurantList>
                        </div>
                        <div class="col">
                        <RestaurantList name = {"B"} price = {500} distance = {10}></RestaurantList>
                        </div>
                        <div class="col">
                        <RestaurantList name = {"C"} price = {500} distance = {10}></RestaurantList>
                        </div>
                        <div class="col">
                        <RestaurantList name = {"D"} price = {500} distance = {10}></RestaurantList>
                        </div>
                </div>
 
                
                
                
                

                
      </div>
	);
}

export default CustomerHomePage;