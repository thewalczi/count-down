import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class TimeUnit extends React.Component {

    constructor() {
        super();
        this.state = {
            unit: 0
        };
    }

    handleIncrease = () => {

        this.setState((prevState, props) => ({
            unit: ++prevState.unit
        }));
    };

    handleDecrease = () => {

        this.setState((prevState, props) => ({
            unit: --prevState.unit
        }));
    };

    handleChangeValue = (event) => {
        this.setState({
            unit: this.state.unit = event.target.value
        });

    };

    componentDidUpdate() {
        if (this.state.unit < 0) {
            this.setState({
                unit: 59
            });
        } else if (this.state.unit > 59) {
            this.setState({
                unit: 0
            });
        }
        console.log(this.state.unit);
    }

    render() {
        return (
            <div className="unit">
                <button className="plus" onClick={this.handleIncrease}>+</button>
                <input type="number" className="unit-counter counter" onChange={this.handleChangeValue} value={ this.state.unit } />
                <button className="minus" onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default TimeUnit;