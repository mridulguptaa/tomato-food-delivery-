import { getElementError } from '@testing-library/react';
import React,{Component,Fragment} from 'react';

const passmatch = () =>{
    let pass1 = document.getElementById('exampleInputPassword1');
    let pass2 = document.getElementById('exampleInputPassword2');

    pass1 = pass1.value ;
    pass2 = pass2.value ;

    if(pass1!==pass2)
    {
        window.alert("Password didn't match. Please try again");
    }
    else{
        window.alert("Password matched");
    }






}

const UserSignUp = () =>{
	return(
		<div className="UserSignUp">
			
<           div class="modal fade" id="signup" tabindex="-1" aria-labelledby="signup" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Sign Up</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        
                    <form>
                        <div class="form-group">
                            <input type="number" inputMode="numeric" pattern="[0-9]{1}" class="form-control"  placeholder="Phone"/>
                            
                            <input type="email"  class="form-control" style={{marginTop: "5px"}}  placeholder="Email"/>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your phone number and email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            <input type="password" class="form-control" style={{marginTop: "5px"}} id="exampleInputPassword2" placeholder="Confirm Password"/>
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Remember me</label>
                        </div>
                        </form>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={passmatch}>Sign Up</button>
                    </div>
                    </div>
                </div>
                </div>
		</div>
	);
}

export default UserSignUp;

