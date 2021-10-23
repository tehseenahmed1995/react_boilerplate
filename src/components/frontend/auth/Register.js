import React , {useState} from "react";
import Navbar from '../../../layouts/frontend/Navbar'

function Register() 
{
    const [registerInput, setRegister = useState({
        name : '',
        email : '',
        password : '',
        confirm_password : ''
    });
    return(
        <div>
        <Navbar/>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Register</h4>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group mb-3">
                                        <label>Full Name</label>
                                        <input type="text" name="name" onChange={handleInput} value={registerInput.name} className="form-control"></input>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Email</label>
                                        <input type="email" name="email" onChange={handleInput} value={registerInput.email}  className="form-control"></input>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Password</label>
                                        <input type="password" name="password" onChange={handleInput} value={registerInput.password}  className="form-control"></input>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Confirm Password</label>
                                        <input type="password" name="confirm_password" onChange={handleInput} value={registerInput.confirm_password}  className="form-control"></input>
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Register;