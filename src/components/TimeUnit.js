import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const BtnContext = React.createContext({});
const BtnProvider = BtnContext.Provider;
const BtnConsumer = BtnContext.Consumer;


class TimeUnit extends React.Component {

    constructor(props) {
        super(props);
    // this.state = {
    //     unit: 0
    // };
    }

    // handleIncrease = () => {

    //     this.setState((prevState, props) => ({
    //         unit: ++prevState.unit
    //     }));
    // };

    // handleDecrease = () => {

    //     this.setState((prevState, props) => ({
    //         unit: --prevState.unit
    //     }));
    // };

    // handleChangeValue = (event) => {
    //     this.setState({
    //         unit: this.state.unit = event.target.value
    //     });
    // };

    // componentDidUpdate() {
    //     if (this.state.unit < 0) {
    //         this.setState({
    //             unit: 59
    //         });
    //     } else if (this.state.unit > 59) {
    //         this.setState({
    //             unit: 0
    //         });
    //     }
    //     console.log(this.state.unit);
    // }

    render() {
        return (
            <div className="unit">
                <button className="plus" onClick={this.props.addTime}>+</button>
                <input type="number" className="unit-counter counter" onChange={this.props.editTime} value={ this.props.unit } />
                <button className="minus" onClick={this.props.subTime}>-</button>
            </div>
        );
    }
}

export default TimeUnit;