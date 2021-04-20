import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

class LastUpdated extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }


    componentDidMount() {
        const decodedToken = localStorage.getItem('decodedTokenID')
        let userId = decodedToken;
        axios.get(`/api/data/${userId}`)
            .then(res => {
                const userData = res.data.slice();
                userData.sort(function (a, b) {
                    var c = new Date(a.date);
                    var d = new Date(b.date);
                    return d - c;
                })
                this.setState({
                    data: userData[0]
                });
                console.log(res)
            })
            .catch((err) => { })
    }

    render() {
        const child = this.state.data || "Not yet updated";

        return <div className="container">
            <div className="card" >
                <div className="card-body">

                    <div className="card-text">
                        Date Updated: <br /> {child.date || "Not yet updated"}<hr />
          Weight: {child.weight || "Not yet updated"} <hr />
          BMI: {child.bmi || "Not yet updated"} <hr />
          BMR: {child.bmr || "Not yet updated"} <hr />
          Suggested Calories Per Day: {child.cpd}<hr /></div>

                    <Link to="/seeData">
                        <button id="filterBtnTwo" className="btn btn-default filter-button card-bottom" >View History</button>
                    </Link>
                </div>
            </div>
        </div>

    }

}




export default LastUpdated;