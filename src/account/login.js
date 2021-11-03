import React from 'react'
import './login.css'
import loginimg from '../components/static/loginimg.jpeg'
function login() {
    return (
        <div>
        
        <div className="container login-container">
        <div className="row login-row">

            <div className="col-lg-5 login-img-container">
                      <img src={loginimg} alt="" className="img-fluid login-img"/>
            </div>


            <div className="col-lg-7 text-center py-5">
                <h1>
                    Login
                </h1>  
                <form>
                    <div className="form-row py-3 pt-5">
                        <div className="offset-1 col-lg-10">
                            <input type="text" className="login-input" placeholder="Username"/>
                        </div>
                    </div>
                    <div className="form-row">
                      <div className="offset-1 py-3 col-lg-10">
                          <input type="Password" className="login-input" placeholder="**********"/>
                      </div>
                    </div>
                    <div className="form-row py-3">
                      <div className="offset-1 col-lg-10">
                          <button className="login-btn">LogIn</button>
                      </div>
                    </div>
                    </form>
            </div>
        </div>
        </div>
        </div>
    )
}

export default login
