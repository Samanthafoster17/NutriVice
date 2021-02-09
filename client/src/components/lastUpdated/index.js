import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

class LastUpdated extends React.Component 
{
    constructor(props){
        super(props);
        this.state = {
            data: [] 
        }
    }
    

    componentDidMount(){
        const decodedToken = localStorage.getItem('decodedTokenID')
        let userId = decodedToken;
        axios.get(`/api/data/${userId}`)
        .then( res  => {
            const userData = res.data.slice();
            userData.sort(function(a, b) {
              var c = new Date(a.date);
              var d = new Date(b.date);
              return d-c;
            })
            this.setState({
                data: userData[0]
            });
            console.log(res)
        })
        .catch((err) => {})
        }
    
      render () {
      const child = this.state.data;
          
              return <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe" >
                  <p>Date Updated: {child.date}</p>
                  <p>Weight: {child.weight}</p>
                  <p>
                      BMI: {child.bmi}
                  </p>
                  <p>BMR: {child.bmr}</p>
                  <p>Suggested Calories Per Day: {child.cpd}</p>
                  <Link to="/seeData">
                  <button id="filterBtnTwo" className="btn btn-default filter-button card-bottom" >View History</button>
                  </Link>
              </div>
          
      }
     
    }
       



export default LastUpdated;