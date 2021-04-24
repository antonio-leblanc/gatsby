import React, { useState, useEffect } from "react";
import { Radar  } from "react-chartjs-2";


const Skills = () => {
    const [whatever, setWhatever] = useState({});

    const options = {
      elements: {
        line: {
          borderWidth: 3
        }
     },
      scale: {
        min: 0,
        max: 5,
        step:1
      },
      ticks:{
        stepSize:1
      }
    }
    const chart = () => {
        setWhatever({
          labels: [
            'Python',
            'JavaScript',
            'Angular',
            'PostgreeSQL',
            'Docker',
            'AWS'
          ],
          datasets: [{
            label: 'Tech Skills',
            data: [5, 5, 4, 3, 3, 3],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
          }, ]
        })
    }

    useEffect(() => {
        chart()
    }, [])

    return(
        <div data-aos="fade-left">
            <h1>Hello</h1>
            <div class="chart-container">
                <Radar data={whatever} options={options}/>
            </div>
        </div>
    )
}

export default Skills;