import React, { useState } from 'react';
import './style.css';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

function Signin() {
   const [loginPassword, setLoginPassword] = useState("");
   const [loginEmail, setLoginEmail] = useState("");

    return (
      <div className="container-fluid main">
          <div className="container-fluid">
              <h1 className="lead brand">
                  NutriVice
              </h1>
              <p className="display-4 quotes">
              <h3> Famous quote</h3>
              “Healthy eating is a way of life, so it’s important to establish <br />routines that are simple, realistically, and ultimately livable.”
                <h4> – Horace</h4>
               </p>
               
               {/* user signin form */}
              <form className="signin">
            <div className="mb-3">
               <label for="signinemail" className="form-label">Email</label>
               <input type="email" className="form-control" aria-describedby="emailhelp" onChange={(e) => setLoginEmail(e.target.value)}  />
            </div>
            <div className="mb-3">
               <label for="signinpassword" className="form-label">Password</label>
               <input type="password" className="form-control" aria-describedby="emailhelp" onChange={(e) => setLoginPassword(e.target.value)}  />
            </div>
            <button type="submit" class="btn btn-primary" >Signin</button>
            <div id="emailHelp" className="form-text">Don't have an account yet? <hr />
             <button className="btn btn-success " href="/signup"> Signup </button>
            </div>
          </form>
          {/* sales texts */}
          </div>
           <div>
          
           </div>

      </div>
    )
}

export default Signin;