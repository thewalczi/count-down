import React from "react";
import ReactDOM from "react-dom";
import TimeUnit from "./TimeUnit";
// import ActionButton from "./ActionButton";
import style from "../css/style.scss";


// const units = ['minutes', 'seconds'];

let countDown;
let timeValuesArr;


class Counter extends React.Component {

    constructor() {
        super();

        const times = [
            {
                unit: 'Minutes',
                value: 0
            },
            {
                unit: 'Seconds',
                value: 6
            }
        ];

        this.state = {
            times
        }

        this.handleStartCount = this.handleStartCount.bind(this)
    }

    handleOperator = (timeUnit, valueIndex, operator) => {


        timeValuesArr = this.state.times.map((value) => {
            return value = value;
        });

        timeValuesArr[valueIndex].value = operator === 'add' ? ++timeValuesArr[valueIndex].value : --timeValuesArr[valueIndex].value;

        this.setState(() => ({
            times: timeValuesArr
        }));

    };

    handleChange = (timeUnit, valueIndex, event) => {

        timeValuesArr = this.state.times.map((value) => {
            return value = value;
        });

        timeValuesArr[valueIndex].value = event.target.value;

        this.setState({
            times: timeValuesArr
        });
    };

    // handleChangeSeconds = (event) => {
    //     this.setState({
    //         seconds: this.state.seconds = event.target.value
    //     });
    // };

    // handleChangeMinutes = (event) => {
    //     this.setState({
    //         minutes: this.state.minutes = event.target.value
    //     });
    // };



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

            {this.state.times.map((time, i) => (
                <TimeUnit
                key={time.unit}
                unit={time.value}
                addTime={() => this.handleOperator(time.unit, i, 'add')}
                subTime={() => this.handleOperator(time.unit, i, 'sub')}
                changeTime={() => this.handleChange(time.unit, i)}
                />
            ))}

            <button onClick={this.handleStartCount}>Start</button>
            
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

export default Counter;