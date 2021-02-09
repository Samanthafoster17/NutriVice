import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

class LastUpdPref extends React.Component 
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
        axios.get(`/api/dataPref/${userId}`)
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
          
              return <div className="card col-md-6" >
              
              <p>Date Updated: {child.date}</p>
                  <p>Dietery Preferences: {child.preferences}</p>
                  <Link to="/seePref">
                  <button id="filterBtnTwo" className="btn btn-default filter-button card-bottom" >View History</button>
                  </Link>
              </div>
          
      }
     
    }
       



export default LastUpdPref;