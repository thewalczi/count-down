import React, {Component} from "react";
import PropTypes from "prop-types";


class TimeUnit extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="unit">
                <button className="plus" onClick={this.props.addTime}>+</button>
                <input type="number" className="unit-counter counter" onChange={this.props.changeTime} value={ this.props.time } />
                <button className="minus" onClick={this.props.subTime}>-</button>
            </div>
        );
    }
}

export default TimeUnit;