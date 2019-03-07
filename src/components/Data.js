import React from 'react'

const decafScore = {
    "0" : {
        hospitalMortality : "0% in hospital mortality",
        risk : "Low",
        care : "Routine Management"
    },
    "1" : {
        hospitalMortality : "1.5% in hospital mortality",
        risk : "Low",
        care : "Routine Management"
    },
    "2" : {
        hospitalMortality: "5.4% in hospital mortality",
    risk: "Intermediate",
       cre : "Use clinician judgement re: disposition"
    },
    "3" : {
        hospitalMortality: "15.3% in hospital mortality",
    risk: "High",
       cre : "Consider escalation of vs. palliative care"
    },
    "4" : {
        hospitalMortality : "31% in hospital mortality",
        risk : "High",
        care : "Consider escalation of vs. palliative care"
    },
    "5" : {
        hospitalMortality : "40.5% in hospital mortality",
        risk : "High",
        care : "Consider escalation of vs. palliative care"
    },
    "6" : {
        hospitalMortality : "50% in hospital mortality",
        risk : "High",
        care : "Consider escalation of vs. palliative care"
    }
}

export default decafScore;
