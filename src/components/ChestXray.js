import React from 'react'

const ChestXray = (props) => (
    <div>
    <p>ChestXray</p>
    <button 
    onClick={props.chestXrayOne}
    disabled={props.chestXrayCons === 1}
    >Yes</button>
    <button
    onClick={props.resetChestXray}
    disabled={props.chestXrayCons === 0}
    >No</button>
    </div>
)

export default ChestXray;