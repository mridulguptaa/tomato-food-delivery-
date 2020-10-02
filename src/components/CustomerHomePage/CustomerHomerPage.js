import React,{Component,Fragment} from 'react';
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
                                <button type="button" class="btn btn-outline-secondary btn-lg white-border text-white" style = {{marginLeft : "80%"}} data-toggle="modal" data-target="#login">
                                Login
                                </button>
                                <button type="button" class="btn btn-outline-secondary btn-lg white-border text-white"   data-toggle="modal" data-target="#signup">
                                Sign Up
                                </button>
                               
                        </nav>   
                <UserLogin>

                </UserLogin>
                <UserSignUp>

                </UserSignUp>
                <Slides>

                </Slides>
                

                

      </div>
	);
}

export default CustomerHomePage;