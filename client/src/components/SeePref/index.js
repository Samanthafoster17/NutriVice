import axios from 'axios';
import React from 'react';
import Footer from '../Footer';
import Nav2 from '../Nav2';
import './style.css'

class SeePref extends React.Component 
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
            this.setState({
                data: res.data,
            });
            console.log(res)
        })
        .catch((err) => {})
        }
    
      render () {

        if (this.state.data.length < 1) {
            
            return <>
              <Nav2 />
            <div className="container">
                <h1>Not yet updated</h1>
                <p>
                    Please return to dashboard to update your stats! <br />
                     Then you may check back here to track your progress!
                </p>
            </div>
            <Footer />
            </>
            
        }

        else {
        
      const child = this.state.data.map((
          el, index) => {
        

            

              return <table>
                  <thead>
                      <tr className="col">
                      <th scope="col">Date Updated</th>
                      <th scope="col">Preferences Saved</th>
                      </tr>
                  </thead>
                  <tbody>
              <tr key={index}>
                  <td>{el.date} </td>
                  <td>{el.preferences}</td>
              </tr>
              </tbody>
              </table>
             
      })
        return (
            <>
            <Nav2 />
            <div className="container">
            <div>{child}</div>
            </div>
            <Footer />
            </>
        )
        
  
        }
    }
    }
       
  



export default SeePref;