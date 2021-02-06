import axios from 'axios';
import React, { Component} from 'react';
import './style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


class  Signup extends Component{
   constructor() {
      super();
      this.state = {
         name: "",
         username: "",
         email: "",
         password: "",
         password2: "",
         errors: {}
      };
   }

   onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
   };

   onSubmit = e => {
      e.preventDefault();

      const newUser = {
         name: this.state.name,
         username: this.state.name,
         email: this.state.email,
         password: this.state.password,
         password2: this.state.password2
      };
      console.log(newUser);

      // fetch('http://localhost:5000/api/users/register', {
      //    method: 'POST',
      //    headers: {
      //       'Accept': 'application/json',
      //       'Content-Type': 'application/json',
      //    },
      //    body: JSON.stringify({
      //       name: this.state.name,
      //       username: this.state.name,
      //       email: this.state.email,
      //       password: this.state.password,
      //       password2: this.state.password2
      //     })
      // })

      axios.post('http://localhost:5000/api/register', newUser)
         .then(res => console.log(res)
         )
         
         .catch(err => console.log(err));


         this.setState({
            name: "",
            username: "",
            email: "",
            password: "",
            password2: "",
         })
         this.props.history.push('/dashboard');

      console.log('out here in submit');
   }

render() {
   const { errors } = this.state;
   return (
      <div className="signup-container">
             <div className = "pillar">
               <h1 className="lead brand">
                  NutriVice
               </h1>
               <div className = "quote">
                  <h4 className=" quotes"> “Health requires healthy food.”</h4>
                  <h6 className=" quotes"> – Roger Williams</h6>      
               </div>
                  {/* <h3 className="quotes"> Famous quote</h3> */}
               
                  {/* user signin form */}
                  <form className="signup" noValidate onSubmit={this.onSubmit}>
                  <div className="mb-3">
                     <label htmlFor="name" className="form-label">Name</label>
                     <input type="text" className="form-control form-group"  
                     onChange={this.onChange}
                     value={this.state.name}
                     error={errors.name}
                     id="name"
                     type="text"
                     />
                  </div>
               <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="tel" className="form-control form-group"  
                  onChange={this.onChange}
                  value={this.state.username}
                  error={errors.username}
                  id="username"
                  type="text"
                  />
               </div>
               <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control form-group" 
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="text"
                  />
               </div>
               <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control form-group"
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  />
               </div>
               <div className="mb-3">
                  <label htmlFor="password" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control form-group"
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  />
               </div>
               <button type="submit" className="btn btn-primary">Register</button>
               <p className="register grey-text text-darken-1">
                  Already have an account? <a href="/signin">Sign In</a>
               </p>
            </form>
            </div>
               
          {/* sales texts */}
      </div>
   )
}
}

export default Signup;