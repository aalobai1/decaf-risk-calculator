import React from 'react'
import ToggleButton from './ToggleButton'
import decafScore from './Data'
import RiskCalculator2 from './RiskCalc2'


export default class DecafApp extends React.Component {
    state = {
        emrcd : 0,
        eosinopenia : 0,
        chestXrayCons : 0,
        acidemia : 0,
        atrialFib : 0,
        decafScore : 0,
        risk : undefined,
        hospitalMortality : undefined,
        care : undefined,
    }

    componentDidUpdate(prevState) {
        console.log("updating")
    }

    calculateDecafScore = () => {
        const num = (this.state.emrcd + this.state.eosinopenia + this.state.chestXrayCons + this.state.acidemia + this.state.atrialFib)
        this.setState(() => (
            {
                hospitalMortality : decafScore[num].hospitalMortality,
                risk : decafScore[num].risk,
                care : decafScore[num].care,
                decafScore : num
         }
        ))
    }

    onSelectEmrcd = (option) => {
      if (option === "Not too dyspenic to leave house (eMRCD 1-4)") {
        this.setState({emrcd : 0}, () => {this.calculateDecafScore()})
      } else if (option === "Too dyspenic to leave house and wash/dress (eMRCD 5b)") {
        this.setState({emrcd : 1}, () => {this.calculateDecafScore()})
      } else if (option === "Too dyspenic to leave house but independent with washing/dressing (eMRCD 5a)") {
        this.setState({emrcd : 2}, () => {this.calculateDecafScore()})
      }
      
    }

    onSelectYesorNo = (option, condition) => {
        if (option === "Yes") {
            this.setState({ [condition] : 1 }, () => {this.calculateDecafScore()})
        } else if (option === "No") {
            this.setState({ [condition] : 0 }, () => {this.calculateDecafScore()})
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
            <RiskCalculator2 
            decafScore={this.state.decafScore}
            risk={this.state.risk}
            hospitalMortality={this.state.hospitalMortality}
            care={this.state.hospitalMortality}
            calculateDecafScore={this.calculateDecafScore}
            />
            </div>
        )
    }
}

