import React from 'react'

const ExtendedMrc = (props) => (
    <div>
    <p>Extended MRC Dyspnea Scale (eMRCD)</p>
    <button  
    onClick={props.resetEmrcd}
    disabled={props.emrcd === 0}
    >Not too dyspenic to leave house (eMRCD 1-4)
    </button>

    <button  
    onClick={props.emrcdOne}
    disabled={props.emrcd === 1}
    >Too dyspneic to leave house and wash/dress (eMRCD 5b)
    </button>

    <button 
    onClick={props.emrcdTwo}
    disabled={props.emrcd === 2}
    >Too dyspneic to leave house but independent with washing/dressing (eMRCD 5a)</button>
    </div>   
)

export default ExtendedMrc;