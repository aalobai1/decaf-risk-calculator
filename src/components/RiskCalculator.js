import React from 'react'

   

    const RiskCalculator = (props) => (
        <div>
        <h2>Decaf Score</h2>
        <button onClick={props.calculate}>Calculate</button>
        <p>{props.DECAFScore}</p>
        <p>{props.risk}</p>
        <p>{props.hospitalMortality}</p>
        <p>{props.care}</p>
        </div>
    )



export default RiskCalculator;