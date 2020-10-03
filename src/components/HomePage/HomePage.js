import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom'

const HomePage = () =>{
	return(
        <div>
            <nav class="navbar navbar-dark bg-dark ">
            <a class="navbar-brand left-margin" href="#">
                <h2>Tomato</h2>
            </a>
        </nav>   
        <br></br><br></br><br></br><br></br>
        <div>
            <Link to='/customer'><button  type="button" class="btn btn-outline-secondary btn-lg white-border text-white" >I am a Customer</button></Link>
            
            <button  type="button" class="btn btn-outline-secondary btn-lg white-border text-white" style = {{margin : "5%" }} >I am a Restaurant</button>
        
            
        </div>
      </div>
	);
}

export default HomePage;