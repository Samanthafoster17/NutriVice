import React from "react";
import { Link } from "react-router-dom";


export default class ActivityLevel extends React.Component {

    constructor() {
        super();

        this.state = {
            activityLevel: '',
            gender: '',
            age: '',

        }

        this.handleActivityLevelChange = this.handleActivityLevelChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
    }

    handleActivityLevelChange(event) {
        this.setState({
            activityLevel: event.target.value
        });
    }

    handleGenderChange(event) {
        this.setState({
            gender: event.target.value
        });
    }

    handleAgeChange(event) {
        this.setState({
            age: event.target.value
        })
    }

    getActivityLevel(activityLevel) {
        let activityLevelResults = {
            label: '',
            alertClass: '',
        };

        if (activityLevel === "sedentary") {
            activityLevelResults.label = 'little to no exercise';
            activityLevelResults.alertClass = 'alert-danger';
        }
        else if (activityLevel === "light") {
            activityLevelResults.label = 'Exercise 1-3 times/week';
            activityLevelResults.alertClass = 'alert-success';
        }
        else if (activityLevel === "medium") {
            activityLevelResults.label = 'Exercise 4-5 times/week';
            activityLevelResults.alertClass = 'alert-warning';
        }
        else if (activityLevel === "heavy") {
            activityLevelResults.label = 'Exercise daily';
            activityLevelResults.alertClass = 'alert-danger';
        } else {
            activityLevelResults.label = '';
            activityLevelResults.alertClass = 'alert-primary';
        }

        return activityLevelResults;
    }

    render() {

        let activityLevel = this.state.activityLevel;
        let results = this.getActivityLevel(activityLevel);
        let gender = this.state.gender;
        let age = this.state.age;

        return (
            <div className="activityLevel container">
                <div className="row">
                    <div className="col-xs-12">
                        <h1>Activity Level</h1>
                        <p>Choose your activity level below.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <form>
                            <div className="form-group">
                                <legend>Activity Level</legend>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <select value={this.state.activityLevel} onChange={this.handleActivityLevelChange}>
                                            <option name="sedentary"> sedentary</option>
                                            <option name="light">light</option>
                                            <option name="medium">medium</option>
                                            <option name="heavy">heavy</option>
                                        </select>
                                    </div>
                                </div>


                                <div className="form-group">
                                    <legend>Gender</legend>
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <select value={this.state.gender} onChange={this.handleGenderChange}>
                                                <option name="male"> Male</option>
                                                <option name="female">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <legend> Age</legend>
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <input className="form-control" id="age" type="number" min="1" max="1000" value={this.state.age} onChange={this.handleAgeChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>


                    <div className="col-sm-6">
                        <ActivityLevelDisplay age={age} gender={gender} activityLevel={activityLevel} label={results.label} alertClass={results.alertClass} />
                    </div>

                </div>
            </div>
        );
    }
}

function ActivityLevelDisplay(props) {
    return (
        <div>
            <div className={"activityLevel-result alert " + props.alertClass}>
                <div>Your Activity Level Is: {props.activityLevel || ''}</div>
                <div>{props.label}</div>
                <div>Your gender is: {props.gender} </div>
                <div>Your age is: {props.age} </div>
            </div>
            <p>Please confirm information is correct</p>
            <Link to={"/DietPref"} >Continue to diet preferences</Link>
        </div>
    )
}


