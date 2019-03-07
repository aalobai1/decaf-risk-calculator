import React from 'react'
import RiskCalculator from './RiskCalculator'
import ToggleButton from './ToggleButton'


export default class DecafApp extends React.Component {
    state = {
        emrcd : 0,
        eosinopenia : 0,
        chestXrayCons : 0,
        acidemia : 0,
        atrialFib : 0,
    }

    componentDidUpdate() {
        console.log("updating")
    }
   


    onSelectEmrcd = (option) => {
      if (option === "Not too dyspenic to leave house (eMRCD 1-4)") {
        this.setState(() => ({emrcd : 0}))
      } else if (option === "Too dyspenic to leave house and wash/dress (eMRCD 5b)") {
        this.setState(() => ({emrcd : 1}))
      } else if (option === "Too dyspenic to leave house but independent with washing/dressing (eMRCD 5a)") {
        this.setState(() => ({emrcd : 2}))
      }
    }

    onSelectYesorNo = (option, condition) => {
        if (option === "Yes") {
            this.setState(() => ({ [condition] : 1 }))
        } else if (option === "No") {
            this.setState(() => ({[condition] : 0}))
        }
    }
    render () {
        return (
            <div>
            <h1>DECAF Score for Acute Exacerbation of COPD</h1>
            <ToggleButton 
            title="Extended MRC Dyspnea Scale (eMRCD)"
            options={
                [
                    "Not too dyspenic to leave house (eMRCD 1-4)",
                    "Too dyspenic to leave house and wash/dress (eMRCD 5b)",
                    "Too dyspenic to leave house but independent with washing/dressing (eMRCD 5a)"
                ]
            }
            onSelect={this.onSelectEmrcd}
            />
            <ToggleButton 
            title="Eosinopenia"
            options={['Yes','No']}
            condition={"eosinopenia"}
            onSelect={this.onSelectYesorNo}
            />
            <ToggleButton 
            title="Chest Xray"
            options={['Yes','No']}
            condition={"chestXrayCons"}
            onSelect={this.onSelectYesorNo}
            />
            <ToggleButton 
            title="Atrial Fibrilation"
            options={['Yes','No']}
            condition={"atrialFib"}
            onSelect={this.onSelectYesorNo}
            />
            <ToggleButton 
            title="Acidemia"
            options={['Yes','No']}
            condition={"acidemia"}
            onSelect={this.onSelectYesorNo}
            />
            <RiskCalculator 
            emrcd={this.state.emrcd}
            eosinopenia={this.state.eosinopenia}
            chestXrayCons={this.state.chestXrayCons}
            acidemia={this.state.acidemia}
            atrialFib={this.state.atrialFib}
            />
            </div>
        )
    }
}

