import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { Button } from '../Button';



export default class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {

            data: {
                labels: ["M", "T", "W", "T", "F", "S", "S"],
                datasets: [
                    {   label: "Week One",
                        data: [140, 145, 146, 150, 152, 155, 162],
                        borderColor: ['#2d6a4f'],
                        backgroundColor: ['#52B788'],
                        pointBackgroundColor: '#D8F3dC',
                        pointBorderColor: '#081c15'
                    },
                    {
                        label: 'Week Two',
                        data: [155, 158, 163, 168, 165, 168, 170],
                        borderColor: ['#2d6a4f'],
                        backgroundColor: ['#52B788'],
                        pointBackgroundColor: '#D8F3dC',
                        pointBorderColor: '#081c15'
                     },
                ]
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
    }

   

    getChartData = canvas => {
        const data = this.state.data;
        return data
    }

     addData(chart) {
        chart.data.labels.push(this.state.label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(this.state.data);
        });
        chart.update();
    }

    render() {
        return (
            <div style={{ position: "relative" }}>
                <h3>Progress</h3>
                <form>
                <input  className="form-control" value={this.state.data.datasets.data} placeholder="Weight" />
                <input  className="form-control" value={this.state.labels} placeholder="Day" />
                <Button  onClick={this.handleChange}/>
                </form>
                <Line
                    options={{
                        title:{
                            display: true,
                            text: 'Progress'
                        },
                        scales: {
                            yAxes:[
                                {
                                    ticks: {
                                        min: 0,
                                        stepsize: 10,
                                        callback: function(value, index, values) {
                                            return value + ' lbs'
                                        }
                                    }
                                }
                            ]
                        },
                        
                        responsive: true,
                    

                    }}
                    data={this.getChartData}
                />
            </div>
        )
    }
}
// const Chart = () =>{

//     const data = {
//         labels: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
//         datasets: [
//             {
//                 label: 'Week One',
                // data: [140, 145, 146, 150, 152, 155, 162],
                // borderColor: ['#2d6a4f'],
                // backgroundColor: ['#52B788'],
                // pointBackgroundColor: '#D8F3dC',
                // pointBorderColor: '#081c15'
//              },
            //  {
            //     label: 'Week Two',
            //     data: [155, 158, 163, 168, 165, 168, 170],
            //     borderColor: ['#2d6a4f'],
            //     backgroundColor: ['#52B788'],
            //     pointBackgroundColor: '#D8F3dC',
            //     pointBorderColor: '#081c15'
            //  },

//         ]
//     }

    // const options = {
        // title:{
        //     display: true,
        //     text: 'Progress'
        // },
        // scales: {
        //     yAxes:[
        //         {
        //             ticks: {
        //                 min: 0,
        //                 stepsize: 10,
        //                 callback: function(value, index, values) {
        //                     return value + ' lbs'
        //                 }
        //             }
        //         }
        //     ]
        // }
    // }
//     return(
//      <Line data={data} options={options}/>
//     )
// }

// export default Chart