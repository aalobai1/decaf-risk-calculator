import React from 'react'

   

    const RiskCalculator = (props) => (
        <div>
        <h2>Decaf Score</h2>
        <button onClick={props.calculate}>Calculate</button>
        <p>Decaf Score: {props.DECAFScore}</p>
        <p>Risk: {props.risk}</p>
        <p>Hospital Mortality: {props.hospitalMortality}</p>
        <p>Care: {props.care}</p>
        </div>
    )



export default RiskCalculator;