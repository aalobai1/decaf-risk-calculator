import React from 'react'
import ToggleButton from './ToggleButton'
import bapScore from './bapComponents/bapData'
import BapCalculator from './bapComponents/bapCalculator'


export default class Bap65Score extends React.Component {

    state = {
        age : "45-64",
        class : "Class I",
        care : "Routine management of COPD exacerbation",
        hospitalMortality : "0.3% in hospital mortality",
        intubation : "0.3% requiring intubation within 64 hrs",
        BAPScore : 0,
        alteredMentalStatus : 0,
        bun : 0,
        pulse : 0
    }

    
    calculateBAPScore = () => {
        const age = this.state.age
        console.log(age)
        const num = (this.state.alteredMentalStatus + this.state.bun + this.state.pulse)
        console.log(num)
        this.setState(() => (
            {
                class : bapScore[age][num].class,
                care : bapScore[age][num].care,
                hospitalMortality : bapScore[age][num].hospitalMortality,
                intubation : bapScore[age][num].intubation,
                BAPScore : bapScore[age][num].bapScore
         }
        ))
    }

    onSelectAge = (option) => {
      if (option === "45-64") {
        this.setState({age : "45-64"}, () => {this.calculateBAPScore()})
      } else if (option === "≥65") {
        this.setState({age : "≥65"}, () => {this.calculateBAPScore()})
        }
    }

    onSelectYesorNo = (option, condition) => {
        if (option === "Yes") {
            this.setState({ [condition] : 1 }, () => {this.calculateBAPScore()})
        } else if (option === "No") {
            this.setState({ [condition] : 0 }, () => {this.calculateBAPScore()})
        }
    }
    
    
    render() {
        return (
            <div>
            <h1>BAP-65 Score for Acute Exacerbation of COPD</h1>
                <ToggleButton 
                title={"BUN ≥25 mg/dL (8.9 mmol/L)"}
                options={["Yes", "No"]}
                condition={"bun"}
                onSelect={this.onSelectYesorNo}
                />
                <ToggleButton 
                title={"Altered mental status"}
                options={["Yes", "No"]}
                condition={"alteredMentalStatus"}
                onSelect={this.onSelectYesorNo}
                />
                <ToggleButton 
                title={"Pulse ≥109 beats/min"}
                options={["Yes", "No"]}
                condition={"pulse"}
                onSelect={this.onSelectYesorNo}
                />
                <ToggleButton 
                title={"Age, years"}
                options={["45-64", "≥65"]}
                condition={"age"}
                onSelect={this.onSelectAge}
                />
                <BapCalculator 
                BAPScore={this.state.BAPScore}
                class={this.state.class}
                care={this.state.care}
                hospitalMortality={this.state.hospitalMortality}
                intubation={this.state.intubation}
                age={this.state.age}
                />
            </div>
        )
    }
}
