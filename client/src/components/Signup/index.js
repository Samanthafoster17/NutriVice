import axios from 'axios';
import React, { useState } from 'react';
import './style.css';
// import { faUtensils } from '@fortawesome/free-solid-svg-icons';

function Signup() {
   const [registerUsername, setRegisterUsername] = useState("");
   const [registerPassword, setRegisterPassword] = useState("");
   const [registerWeight, setRegisterWeight] = useState("");
   const [registerName, setRegisterName] = useState("");
   const [registerEmail, setRegisterEmail] = useState("");

   const register = () => {
      axios({
         method: "POST",
         data: {
            username: registerUsername,
            password: registerPassword
         },
        withCredentials: true,
        url: "http://localhost:5000/register"
      }).then(res => {
         console.log(res)
      })
   }

    return (
      <div className="container-fluid main">
          <div className="container-fluid">
              <h1 className="lead brand">
                  NutriVice
              </h1>
              <div className="display-4 quotes">
              <h3> Famous quote</h3>
              <h4> “Health requires healthy food.”</h4>
                <h6> – Roger Williams</h6>
               </div>
               
               {/* user signin form */}
              <form className="signup">
              <div className="mb-3">
               <label for="name" className="form-label">Name</label>
               <input type="text" className="form-control" onChange={(e) => setRegisterName(e.target.value)}  />
            </div>
            <div className="mb-3">
               <label for="username" className="form-label">Username</label>
               <input type="tel" className="form-control"  onChange={(e) => setRegisterUsername(e.target.value)}  />
            </div>
            <div className="mb-3">
               <label for="weight" className="form-label">Weight</label>
               <input type="number" className="form-control"  onChange={(e) => setRegisterWeight(e.target.value)} />
            </div>
            <div className="mb-3">
               <label for="signinemail" className="form-label">Email</label>
               <input type="email" className="form-control"  onChange={(e) => setRegisterEmail(e.target.value)}  />
            </div>
            <div className="mb-3">
               <label for="signinpassword" className="form-label">Password</label>
               <input type="password" className="form-control"  onChange={(e) => setRegisterPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={register} >Register</button>
            <div id="emailHelp" className="form-text">Already have an Account? <hr />
             <button className="btn btn-success " href="/signin" > Signin </button>
            </div>
          </form>
          {/* sales texts */}
          </div>
           <div>
          
           </div>

      </div>
    )
}

export default Signup;