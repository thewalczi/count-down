import React, {Component} from "react";
import PropTypes from "prop-types";


class TimeUnit extends Component {


    render() {

        const Button = (unit, operator) => {
            let sign = operator === 'add' ? '+' : '-';
            
            return (
                <button
                    className={operator}
                    onClick={() => this.props.handleUnit(operator, unit)}
                    disabled={this.props.appState !== 'set'}>
                    {sign}
                </button>
            )
        }

        const Input = (unit) => {
            return (
                <input 
                    type="number" 
                    className="unit-counter counter" 
                    onChange={() => this.props.changeTime(unit, event.target.value)}
                    onBlur={() => this.props.ifEmpty(unit)}
                    value={ this.props[unit] } 
                    disabled={this.props.appState !== 'set'}
                />
            )
        }

        return (
            <React.Fragment>
               <div className="unit unit-minutes">
                    {Button('minutes', 'add')}
                    {Input('minutes')}
                    {Button('minutes', 'sub')}
                </div>
                <div className="unit unit-seconds">
                    {Button('seconds', 'add')}
                    {Input('seconds')}
                    {Button('seconds', 'sub')}
                </div>
            </React.Fragment>
        )
    }
}

export default TimeUnit;