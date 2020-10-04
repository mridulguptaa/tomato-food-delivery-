import React,{Component,Fragment} from 'react';

const UserLogin = () =>{
	return(
		<div className="UserLogin">
			
<div class="modal fade" id="login" tabindex="-1" aria-labelledby="" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        
                    <form>
                        <div class="form-group">
                            <input type="number" inputMode="numeric" pattern="[0-9]{1}" class="form-control"  placeholder="Phone"/>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your phone number with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="loginid" placeholder="Password"/>
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Remember me</label>
                        </div>
                        </form>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Login</button>
                    </div>
                    </div>
                </div>
                </div>
		</div>
	);
}

export default UserLogin;

