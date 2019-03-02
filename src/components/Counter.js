import React, {Component} from "react";

import TimeUnit from "./TimeUnit";
import ActionButton from "./ActionButton";
import style from "../css/style.scss";


// const units = ['minutes', 'seconds'];

let countDown;
let timeValuesArr;
let seconds;
let minutes;
let copyArr;

class Counter extends Component {

    constructor() {
        super();

        const times = [
            {
                unit: 'Minutes',
                value: 1
            },
            {
                unit: 'Seconds',
                value: 3
            }
        ];

        this.state = {
            times,
            appState: 'set'
        }

    }


    //Functions
    //---------------------------

    copyArr = () => {
        timeValuesArr = this.state.times.map((value) => {
            return value = value;
        });
    };

    handleOperator = (valueIndex, operator) => {


        this.copyArr();

        timeValuesArr[valueIndex].value = operator === 'add' ? ++timeValuesArr[valueIndex].value : --timeValuesArr[valueIndex].value;

        this.setState(() => ({
            times: timeValuesArr
        }));

    };

    handleChange = (valueIndex, event) => {

        this.copyArr();

        timeValuesArr[valueIndex].value = event;

        this.setState({
            times: timeValuesArr
        });
    };

    appStateChange = (state) => {
        this.setState({
            appState: state
        })
        console.log(state);
    } 


    handleStartCount = () => {

        this.copyArr();

        countDown = setInterval(function() {

            if (this.state.times[0].value == 0 && this.state.times[1].value == 0) {
                clearInterval(countDown);
                // alert('end');
                this.appStateChange('end');
            } else {
                timeValuesArr[1].value = --timeValuesArr[1].value

                this.setState({
                    times: timeValuesArr
                });
            }
        }.bind(this), 1000);

        this.appStateChange('run');
    };


    //Lifecycle methods
    //------------------------------

    componentDidUpdate() {

        seconds = this.state.times[1].value;
        minutes = this.state.times[0].value;

        this.copyArr();

        if (seconds < 0 && minutes >= 0) {

            timeValuesArr[1].value = 59;
            timeValuesArr[0].value = --timeValuesArr[0].value;

            this.setState({
                times: timeValuesArr
            });
        } else if (seconds > 59) {

            timeValuesArr[1].value = 0;

            this.setState({
                times: timeValuesArr
            });
        }
    }


    render() {
        let wrapperClassNames = ["counter-wrapper " + this.state.appState];

        return (
            <div className={wrapperClassNames}>

                {this.state.times.map((time, index) => (
                    <TimeUnit
                    key={time.unit}
                    time={time.value}
                    addTime={() => this.handleOperator(index, 'add')}
                    subTime={() => this.handleOperator(index, 'sub')}
                    changeTime={event => this.handleChange(index, event.target.value)}
                    />
                ))}
                <ActionButton appState={this.state.appState} startCount={this.handleStartCount}/>
                
            </div>
        );
    }
}

export default Counter;



