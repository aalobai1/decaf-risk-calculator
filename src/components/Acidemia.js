import React from 'react'

const Acidemia = (props) => (
    <div>
    <p>Acidemia</p>
    <button 
    onClick={props.acidemiaOne}
    disabled={props.acidemia === 1}
    >
    Yes</button>
    <button
    onClick={props.resetAcidemia}
    disabled={props.acidemia === 0}
    >
    No</button>
    </div>
)

export default Acidemia;