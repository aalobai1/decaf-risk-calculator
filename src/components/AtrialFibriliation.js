import React from 'react'

const AtrialFibrilation = (props) => (
    <div>
    <p>AtrialFibrilation</p>
    <button 
    onClick={props.atrialFibOne}
    disabled={props.atrialFib === 1}
    >Yes</button>
    <button
    onClick={props.resetAtrialFibOne}
    disabled={props.atrialFib === 0}
    >No</button>
    </div>
)

export default AtrialFibrilation;