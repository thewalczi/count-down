import React, {Component} from "react";

import TimeUnit from "./TimeUnit";
import ActionButton from "./ActionButton";
import Modal from "./Modal";
import style from "../css/style.scss";


let countDown;

class Counter extends Component {

    constructor() {
        super();

        this.state = {
            minutes: 0,
            seconds: 0,
            appState: 'set',
            show: false
        }

    }

    //Functions
    //---------------------------

    handleUnit = (action, unit) => {
        let operator =  (action == 'add' ? ++this.state[unit] : --this.state[unit])
        this.setState({
            [unit]: operator
        })
    }

    handleChange = (unit, event) => {
        this.setState({
            [unit]: event
        });
    };

    appStateChange = (state) => {
        this.setState({
            appState: state
        })
        console.log(state);
    }

    showModal = () => {
        this.setState({
            show: true
        });
    };

    hideModal = () => {
        this.setState({
            show: false
        });
    };

    //State handlers
    //--------------------------------
    
    handleStartCounter = () => {
        if (this.state.minutes === 0 && this.state.seconds === 0){
            {this.showModal()}
            // alert("value can't be empty");
            console.log(this.state.show);
        } else {
            countDown = setInterval(function() {

                if (this.state.minutes == 0 && this.state.seconds == 0) {
                    clearInterval(countDown);
                    this.appStateChange('end');
                } else {
                    this.setState({
                        seconds: --this.state.seconds
                    });
                }
            }.bind(this), 1000);

            this.appStateChange('run');
        }
    };

    handlePauseCounter = () => {
        clearInterval(countDown);
        this.appStateChange('pause');
    };

    handleSetCounter = () => {
        this.appStateChange('set');
    };

    //Lifecycle methods
    //------------------------------

    componentDidUpdate() {

        if (this.state.seconds < 0 && this.state.minutes >= 0) {

            this.setState({
                seconds: 59
            })
            
            if(this.state.appState === 'run') {
                this.setState({
                    minutes: --this.state.minutes
                })
            }
        } else if (this.state.seconds > 59) {
            this.setState({
                seconds: 0
            });
        } else if (this.state.minutes < 0) {
            this.setState({
                minutes: 0
            })
        }
    }

    render() {
        let wrapperClassNames = [`counter-wrapper counter-${this.state.appState}`];

        return (
            <div className={wrapperClassNames}>
                <div className="counter-container">
                    <TimeUnit changeTime={this.handleChange} appState={this.state.appState} handleUnit={this.handleUnit} minutes={this.state.minutes} seconds={this.state.seconds} />      
                </div>
                <ActionButton appState={this.state.appState} startCounter={this.handleStartCounter} pauseCounter={this.handlePauseCounter} setCounter={this.handleSetCounter}/>
                <Modal show={this.state.show} handleClose={this.hideModal}/>
            </div>
        );
    }
}

export default Counter;






//KNOWN BUGS
//------------------

/*
1. **RESOLVED** Minutes value can be negative

2. Minutes value can be more than 999. Causing that the value is not fully displayed in the field.

3. **RESOLVED** Counter is starting even when value is 00:00. Prevent that with some warning. "You cannot get water out of a stone. Please provide some value to start the counter"

4. **RESOLVED** Add and Sub buttons are available in all states. Should be available only in 'set' state. 

5. Value after manually removing can be empty.


*/


//IMPROVEMENTS
//------------------

/*
1. Message when count is done.

2. Message when error occurs.

3. Error handling

4. **DONE** Styling for buttons

5. Engine for Pomodoro (Settingtime for focus and for breaks, Browser tab focused when counting is over)

6. Tabs on top (for regular timer and pomodoro)

7. Side info

*/