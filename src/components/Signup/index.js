import React from 'react';
import './style.css';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

function Signup() {

    return (
      <div className="container-fluid main">
          <div className="container-fluid">
              <h1 className="lead brand">
                  NutriVice
              </h1>
              <p className="display-4 quotes">
              <h3> Famous quote</h3>
              <h4> “Health requires healthy food.”</h4>
                <h6> – Roger Williams</h6>
               </p>
               
               {/* user signin form */}
              <form className="signup">
              <div className="mb-3">
               <label for="name" className="form-label">Name</label>
               <input type="text" className="form-control"  />
            </div>
            <div className="mb-3">
               <label for="username" className="form-label">Username</label>
               <input type="tel" className="form-control"  />
            </div>
            <div className="mb-3">
               <label for="weight" className="form-label">Weight</label>
               <input type="email" className="form-control"  />
            </div>
            <div className="mb-3">
               <label for="signinemail" className="form-label">Email</label>
               <input type="email" className="form-control"  />
            </div>
            <div className="mb-3">
               <label for="signinpassword" className="form-label">Password</label>
               <input type="password" className="form-control"  />
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
            <div id="emailHelp" className="form-text">Already have an Account? <hr />
             <button className="btn btn-success " href="/signin"> Signin </button>
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