import React from 'react'


    const BapCalculator = (props) => (
            <div>
            <h2>BAP Score</h2>
            <p>BAP {props.BAPScore}</p>
            <p>Age: {props.age}</p>
            <p>{props.class}</p>
            <p>{props.care}</p>
            <p>{props.hospitalMortality}</p>
            <p>{props.intubation}</p>
            </div>
        )

export default BapCalculator;