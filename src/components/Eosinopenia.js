import React from 'react'



const Eosinopenia = (props) => (
    <div>
    <p>Eosinopenia</p>
    <button onClick={props.eosinopeniaOne}
    disabled = {props.eosinopenia === 1}
    >Yes</button>
    <button
    onClick={props.resetEosinopenia}
    disabled = {props.eosinopenia === 0}
    >
    No</button>
    </div>
)

export default Eosinopenia;