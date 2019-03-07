import React from 'react'

export default class ToggleButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title : props.title,
            options : props.options,
            condition : props.condition,
            bgColor : 'gray',
        }
        this.onSelect = this.onSelect.bind(this)
    }
    onSelect = (option) => {
        this.props.onSelect(option, this.props.condition)
    }

    render = () => (
        <div>
        <p>{this.state.title}</p>
        {this.props.options.map((option) => 
            <button
            key={option}
            onClick={() => this.onSelect(option)}
            style={{backgroundColor:this.state.bgColor}}
            >
            {option}
            </button>
            )}
        </div>
    )

}