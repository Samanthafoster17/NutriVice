import axios from 'axios';
import React from 'react';

class SeeData extends React.Component 
{
    constructor(props){
        super(props);
        this.state = {
            weight: "",
            data: [] 
        }
    }
    

    componentDidMount(){
        const decodedToken = localStorage.getItem('decodedTokenID')
        let userId = decodedToken;
        axios.get(`/api/data/${userId}`)
        .then( res  => {
            this.setState({
                data: res.data
            });
            console.log(res)
        })
        .catch((err) => {})
        }
    
      render () {
      const child = this.state.data.map((
          el, index) => {
              return <div key={index}>
                  <p>Date: {el.date}</p>
                  <p>Weight: {el.weight}</p>
                  <p>
                      Bmi: {el.bmi}
                  </p>
                  <p>Bmr: {el.bmr}</p>
                  <p>Suggested Calories Per Day: {el.cpd}</p>
              </div>
          
      })
        return <div>
                <div>{child}</div>
              </div>
  
        }
    }
       



export default SeeData;