import React from 'react'
import ExtendedMrc from './Extended-mrc'
import Eosinopenia from './Eosinopenia'
import ChestXray from './ChestXray'
import AtrialFibrilation from './AtrialFibriliation'
import Acidemia from './Acidemia'
import RiskCalculator from './RiskCalculator'


export default class DecafApp extends React.Component {
    state = {
        DECAFScore : undefined,
        Risk : undefined,
        emrcd : 0,
        eosinopenia : 0,
        chestXrayCons : 0,
        acidemia : 0,
        atrialFib : 0,
        hospitalMortality : undefined,
        care : undefined
    }
   
    calculateDecafScore = () => {
        const decafScore = (this.state.emrcd + this.state.eosinopenia + this.state.chestXrayCons + this.state.acidemia + this.state.atrialFib)
        console.log(decafScore)
        this.calculateHospitalMortality(decafScore)
        this.setState(() => (
            {
                DECAFScore : decafScore
            }
        ))
        if (decafScore <= 1 ) {
            this.setState(() => ({
                Risk : "Low",
                care : "Routine Management"
            }))
        } else if (decafScore > 1 && decafScore <=2 ) {
            this.setState(() => ({
                Risk : "Intermediate",
                care : "Use clinician judgement re: disposition"
            }))
        } else {
            this.setState(() => ({
                Risk : "High",
                care : "Consider escalation of vs. palliative care"
            }))
        }
    }

    calculateHospitalMortality = (num) => {
      
         if (num === 0) {
            this.setState(() => ({hospitalMortality : "0% in hospital mortality"}));
         } else if (num === 1) {
            this.setState(() => ({hospitalMortality : "1.5% in hospital mortality"}));
         } else if (num === 2) {
            this.setState(() => ({hospitalMortality : "5.4% in hospital mortality"}));
         } else if (num === 3) {
            this.setState(() => ({hospitalMortality : "15.3% in hospital mortality"}));
         } else if (num === 4) {
            this.setState(() => ({hospitalMortality : "31% in hospital mortality"}));
         } else if (num === 5) {
            this.setState(() => ({hospitalMortality : "40.5% in hospital mortality"}));
         } else if (num === 6) {
            this.setState(() => ({hospitalMortality : "50% in hospital mortality"}));
         }

    }

    

    resetEmrcd = () => {
        this.setState(() => ({emrcd : 0}))
    }
    emrcdOne = () => {
        this.setState(() => ({emrcd : 1}))
    }
    emrcdTwo = () => {
      this.setState(() => ({emrcd : 2}))
    }

    resetEosinopenia = () => {
        this.setState(() => ({ eosinopenia : 0}))
    }

    eosinopeniaOne = () => {
        this.setState(() => ({eosinopenia : 1}))
    }

    resetChestXray = () => {
        this.setState(()=>({
            chestXrayCons : 0
        }))
    }
  
    chestXrayOne = () => {
        this.setState(()=>({
            chestXrayCons : 1
        }))
    }

    resetAcidemia = () => {
        this.setState(()=>({
            acidemia : 0
        }))
    }
    
    acidemiaOne = () => {
        this.setState(()=>({
            acidemia : 1
        }))
    }

    resetAtrialFib = () => {
        this.setState(()=>({
            atrialFib : 0
        }))
    }

    atrialFibOne = () => {
        this.setState(()=>({
            atrialFib : 1
        }))
    }


    render () {
        return (
            <div>
            <h1>DECAF Score for Acute Exacerbation of COPD</h1>
            <ExtendedMrc 
            emrcd={this.state.emrcd}
            resetEmrcd={this.resetEmrcd}
            emrcdOne={this.emrcdOne}
            emrcdTwo={this.emrcdTwo}
            />
            <Eosinopenia
            resetEosinopenia={this.resetEosinopenia}
            eosinopeniaOne={this.eosinopeniaOne}
            eosinopenia={this.state.eosinopenia}
            />
            <ChestXray
            resetChestXray={this.resetChestXray}
            chestXrayOne={this.chestXrayOne}
            chestXrayCons={this.state.chestXrayCons}
            />
            <AtrialFibrilation 
            resetAtrialFib={this.resetAtrialFib}
            atrialFibOne={this.atrialFibOne}
            atrialFib={this.state.atrialFib}
            />
            <Acidemia
            resetAcidemia={this.resetAcidemia}
            acidemiaOne={this.acidemiaOne}
            acidemia={this.state.acidemia}
            />
            <RiskCalculator 
            DECAFScore={this.state.DECAFScore}
            risk={this.state.Risk}
            hospitalMortality={this.state.hospitalMortality}
            care={this.state.care}
            calculate={this.calculateDecafScore}
            />
            </div>
        )
    }
}

