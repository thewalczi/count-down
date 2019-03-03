import React, {Component} from "react";
import PropTypes from "prop-types";


class TimeUnit extends Component {

    render() {

        const Button = (unit, operator) => {
            let sign = operator === 'add' ? '+' : '-';
            
            return <button
                className={operator}
                onClick={() => this.props.handleUnit(operator, unit)}
                disabled={this.props.appState !== 'set'}>
                {sign}
            </button>
        }

        return (
            <React.Fragment>
               <div className="unit unit-minutes">
                    {Button('minutes', 'add')}
                    <input 
                        type="number" 
                        className="unit-counter counter" 
                        onChange={() => this.props.changeTime('minutes', event.target.value)} 
                        value={ this.props.minutes } 
                        disabled={this.props.appState !== 'set'}
                    />
                    {Button('minutes', 'sub')}
                </div>
                <div className="unit unit-seconds">
                    {Button('seconds', 'add')}
                    <input
                        type="number"
                        className="unit-counter counter"
                        onChange={() => this.props.changeTime('seconds', event.target.value)}
                        value={ this.props.seconds }
                        disabled={this.props.appState !== 'set'}
                    />
                    {Button('seconds', 'sub')}
                </div>
            </React.Fragment>
        );
    }
}

export default TimeUnit;