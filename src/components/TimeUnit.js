import React, {Component} from "react";
import PropTypes from "prop-types";


class TimeUnit extends Component {

    render() {
        return (
            <React.Fragment>
               <div className="unit unit-minutes">
                    <button className="plus" onClick={() => this.props.handleUnit('add', 'minutes')}>+</button>
                    <input type="number" className="unit-counter counter" onChange={() => this.props.changeTime('minutes', event.target.value)} value={ this.props.minutes } />
                    <button className="minus" onClick={() => this.props.handleUnit('sub', 'minutes')}>-</button>
                </div>
                <div className="unit unit-seconds">
                    <button className="plus" onClick={() => this.props.handleUnit('add', 'seconds')}>+</button>
                    <input type="number" className="unit-counter counter" onChange={() => this.props.changeTime('seconds', event.target.value)} value={ this.props.seconds }/>
                    <button className="minus" onClick={() => this.props.handleUnit('sub', 'seconds')}>-</button>
                </div>
            </React.Fragment>
        );
    }
}

export default TimeUnit;