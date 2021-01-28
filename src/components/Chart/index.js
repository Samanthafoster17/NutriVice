import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = () =>{

    const data = {
        labels: ['week1', 'week2', 'week3', 'week4',],
        datasets: [
            {
                label: 'Month One',
                data: [145, 146, 150, 152],
                borderColor: ['rgba(255, 206, 86, 0.2)'],
                backgroundColor: ['rgba(255, 206, 86, 0.2)'],
                pointBackgroundColor: 'rgba(255, 206, 86, 0.2)',
                pointBorderColor: 'rgba(255, 206, 86, 0.2)'
             },
             {
                label: 'Month Two',
                data: [155, 158, 163, 168],
                borderColor: ['rgba(54, 162, 235, 0.2)'],
                backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
                pointBorderColor: 'rgba(54, 162, 235, 0.2)'
             },
            
        ]
    }

    const options = {
        title:{
            display: true,
            text: 'Line Chart'
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