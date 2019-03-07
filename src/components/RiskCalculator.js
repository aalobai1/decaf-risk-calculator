import React from 'react'
import decafScore from './Data'

    class RiskCalculator extends React.Component {
        constructor(props) {
            super(props)
            this.calculateDecafScore = this.calculateDecafScore.bind(this)
            this.state = {
                decafScore : 0,
                risk : undefined,
                hospitalMortality : undefined,
                care : undefined
            }
        }

      

        calculateDecafScore = () => {
            const DECAFScore = (this.props.emrcd + this.props.eosinopenia + this.props.chestXrayCons + this.props.acidemia + this.props.atrialFib)
            this.calculateHospitalMortality(DECAFScore)
        }

        calculateHospitalMortality = (num) => {
            if (num === 0) {
               this.setState(() => (
                   {
                       hospitalMortality : decafScore["0"].hospitalMortality,
                       risk : decafScore["0"].risk,
                       care : decafScore["0"].care,
                       decafScore : num
                }
               ))
            } else if (num === 1) {
                this.setState(() => (
                    {
                        hospitalMortality : decafScore["1"].hospitalMortality,
                        risk : decafScore["1"].risk,
                        care : decafScore["1"].care,
                        decafScore : num
                 }
                ))
            } else if (num === 2) {
                this.setState(() => (
                    {
                        hospitalMortality : decafScore["2"].hospitalMortality,
                        risk : decafScore["2"].risk,
                        care : decafScore["2"].care,
                        decafScore : num
                 }
                ))
            } else if (num === 3) {
                this.setState(() => (
                    {
                        hospitalMortality : decafScore["3"].hospitalMortality,
                        risk : decafScore["3"].risk,
                        care : decafScore["3"].care,
                        decafScore : num
                 }
                ))
            } else if (num === 4) {
                this.setState(() => (
                    {
                        hospitalMortality : decafScore["4"].hospitalMortality,
                        risk : decafScore["4"].risk,
                        care : decafScore["4"].care,
                        decafScore : num
                 }
                ))
            } else if (num === 5) {
                this.setState(() => (
                    {
                        hospitalMortality : decafScore["6"].hospitalMortality,
                        risk : decafScore["6"].risk,
                        care : decafScore["5"].care,
                        decafScore : num
                 }
                ))
            } else if (num === 6) {
                this.setState(() => (
                    {
                        hospitalMortality : decafScore["6"].hospitalMortality,
                        risk : decafScore["6"].risk,
                        care : decafScore["6"].care,
                        decafScore : num
                 }
                ))
            }
   
       }



        render = () => (
            <div>
            <h2>Decaf Score</h2>
            <button onClick={this.calculateDecafScore}>Calculate</button>
            <p>Decaf Score: {this.state.decafScore}</p>
            <p>Risk: {this.state.risk}</p>
            <p>Hospital Mortality: {this.state.hospitalMortality}</p>
            <p>Care: {this.state.care}</p>
            </div>
        )

        

    }


export default RiskCalculator;