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
            const num = (this.props.emrcd + this.props.eosinopenia + this.props.chestXrayCons + this.props.acidemia + this.props.atrialFib)
            
            this.setState(() => (
                {
                    hospitalMortality : decafScore[num].hospitalMortality,
                    risk : decafScore[num].risk,
                    care : decafScore[num].care,
                    decafScore : num
             }
            ))
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