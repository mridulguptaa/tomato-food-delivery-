import React,{Component,Fragment} from 'react';


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
            <button  type="button" class="btn btn-outline-secondary btn-lg white-border text-white" >I am a Customer</button>
            
            <button  type="button" class="btn btn-outline-secondary btn-lg white-border text-white" style = {{margin : "5%" }} >I am a Restaurant</button>
        
            
        </div>
      </div>
	);
}

export default HomePage;