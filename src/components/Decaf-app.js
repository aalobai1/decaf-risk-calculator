import React from 'react'
import DecafScoreForAcuteExacerbation from './decafScoreForAcuteExacerbation'
import Bap65Score from './bap-65-score'
import { Tabs } from '@yazanaabed/react-tabs'


export default class DecafApp extends React.Component {
    
    render () {
        return (
            <div>
                <Tabs activeTab={{ id: "tab1" }}>
                    <React.Fragment>
                        <Tabs.Tab id="tab1" title="DECAF Score for Acute Exacerbation of COPD">
                            <DecafScoreForAcuteExacerbation />
                        </Tabs.Tab>
                        <Tabs.Tab id="tab2" title="BAP-65 Score for Acute Exacerbation of COPD">
                            <Bap65Score/>
                        </Tabs.Tab>
                    </React.Fragment>
                </Tabs>          
            </div>
        )
    }
}

