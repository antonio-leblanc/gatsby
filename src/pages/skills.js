import React, { useState, useEffect } from "react";
import { Doughnut  } from "react-chartjs-2";


const Skills = () => {
    const [whatever, setWhatever] = useState({});

    const chart = () => {
        setWhatever({
            labels: ["monday", "tuesday", "wednesday", "thursday", "friday"],
            datasets: [
                {
                    level: 'level of xyz',
                    data: [32, 55, 33, 47, 64]
                }
            ]
        })
    }

    useEffect(() => {
        chart()
    }, [])

    return(
        <div>
            <h1>Hello</h1>
            <div>
                <Doughnut  data={whatever}/>
            </div>
        </div>
    )
}

export default Skills;