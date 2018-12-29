import React from "react";
import ReactDOM from "react-dom";
import TimeUnit from "./TimeUnit";
// import ActionButton from "./ActionButton";
import style from "../css/style.scss";

// const unitsMap = ['minutes', 'seconds'];

let countDown

class Counter extends React.Component {

    constructor() {
        super();

        this.state = {
            seconds: 4,
            minutes: 0
        };

        this.handleStartCount = this.handleStartCount.bind(this)
    }

    handleIncreaseSeconds = () => {
        this.setState((prevState, props) => ({
            seconds: ++prevState.seconds
        }));
    };

    handleDecreaseSeconds = () => {
        this.setState((prevState, props) => ({
            seconds: --prevState.seconds
        }));
    };

    handleChangeSeconds = (event) => {
        this.setState({
            seconds: this.state.seconds = event.target.value
        });
    };

    handleIncreaseMinutes = () => {
        this.setState((prevState, props) => ({
            minutes: ++prevState.minutes
        }));
    };

    handleDecreaseMinutes = () => {
        this.setState((prevState, props) => ({
            minutes: --prevState.minutes
        }));
    };

    handleChangeMinutes = (event) => {
        this.setState({
            minutes: this.state.minutes = event.target.value
        });
    };



    handleStartCount = () => {
        countDown = setInterval(function() {
            if (this.state.minutes >= 0) {
                this.setState({
                    seconds: --this.state.seconds
                });

            }
        }.bind(this), 1000);
    }

    componentDidUpdate() {

        if (this.state.seconds < 0 && this.state.minutes >= 0) {
            this.setState({
                seconds: 59,
                minutes: --this.state.minutes
            });
        } else if (this.state.seconds > 59) {
            this.setState({
                seconds: 0
            });

        } else if (this.state.minutes == 0 && this.state.seconds <= 0) {
            clearInterval(countDown);
            alert('end');
        }
    }


    render() {

        return (
            <div className="counter-wrapper">

            <TimeUnit
            key={1}
            unit={this.state.minutes}
            addTime={this.handleIncreaseMinutes}
            subTime={this.handleDecreaseMinutes}
            editTime={this.handleChangeMinutes} />

            <TimeUnit
            key={0}
            unit={this.state.seconds}
            addTime={this.handleIncreaseSeconds}
            subTime={this.handleDecreaseSeconds}
            editTime={this.handleChangeSeconds} />

            <button onClick={this.handleStartCount}>Start</button>
            
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

export default Counter;