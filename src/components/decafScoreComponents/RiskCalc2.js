import React from 'react'


    const RiskCalculator2 = (props) => (
            <div>
            <h2>Decaf Score</h2>
            <p>Decaf Score: {props.decafScore}</p>
            <p>Risk: {props.risk}</p>
            <p>Hospital Mortality: {props.hospitalMortality}</p>
            <p>Care: {props.care}</p>
            </div>
        )

export default RiskCalculator2;