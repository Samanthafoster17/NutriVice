import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = () =>{

    const data = {
        labels: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [
            {
                label: 'Week One',
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

    const options = {
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
        }
    }
    return(
     <Line data={data} options={options}/>
    )
}

export default Chart