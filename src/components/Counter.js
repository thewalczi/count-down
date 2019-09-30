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
            show: false,
            val: 1
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
        // if(event >= 99){
            this.setState({
                [unit]: parseInt(event)  //parsing string into a number after manually change the value in counter
            });
        // }
    };

    handleBlur = (unit) => {  //Checking if the value is NaN (empty) and setting there 0
        if(Number.isNaN(this.state[unit])) {
            this.setState({
                [unit]: 0
            })
            console.log(this.state[unit]);
        }
    } 

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
        if (this.state.minutes === 0 && this.state.seconds === 0 && this.state.appState === 'set'){
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

        if (this.state.appState === 'set'){
            this.setState({
                val: (this.state.minutes * 60 + this.state.seconds)
            });
        }
    };

    handlePauseCounter = () => {
        clearInterval(countDown);
        this.appStateChange('pause');
    };

    handleSetCounter = () => {
        this.appStateChange('set');
        this.setState({
                val: (this.state.minutes * 60 + this.state.seconds)
            });
    };

    fillWithZero = unit => {
        // let unitInput = document.querySelector(`.unit-${unit} > .unit-counter`);
        // if (this.state[unit] < 10) {
            // return unitInput.insertBefore('0');

            let valWithZero = (`0${this.state[unit]}`).slice(-2);
            // let convertToNum = parseInt(valWithZero);
            
            // this.setState({
            //     [unit]: convertToNum
            // });
            console.log(valWithZero)
            // console.log(convertToNum)
        }
    

    progressBar = (canvas) => {  //Radial progressbar
        return {
            ctx: document.getElementById(canvas).getContext('2d'),
            display: function (p) {
                this.ctx.strokeStyle = 'white';  //path color
                this.ctx.lineWidth = 5; // path width
                this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
                this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

                let center = this.ctx.canvas.width / 2;
                //circle as progress bar
                this.ctx.beginPath();
                this.ctx.globalAlpha = 0.7;  //path transparency
                this.ctx.arc(center, center, center * 0.9, 0 * Math.PI, (p * 2 * Math.PI)); // x, y, z ...
                this.ctx.stroke();
                //Static circle in background
                this.ctx.beginPath();
                this.ctx.globalAlpha = 0.2;  //path transparency
                this.ctx.arc(center, center, center * 0.9, 0, 2 * Math.PI);
                this.ctx.stroke();   
            }
		}	
	}
    

    //Lifecycle methods
    //------------------------------

    componentDidMount() {
        this.progressBar('progress-bar').display(1);  // initial render of progress bar     //change to useEffect Hooks
    }

    componentWillUpdate() {
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
        } else if (this.state.minutes > 99) {
            this.setState({
                minutes: 99
            })
        }

        // this.fillWithZero('minutes');
    }
    
    componentDidUpdate() {
        let int = (this.state.minutes * 60 + this.state.seconds) / this.state.val; //change to useEffect Hooks
        this.progressBar('progress-bar').display(int);
    }


    render() {
        let wrapperClassNames = [`counter-wrapper counter-${this.state.appState}`];

        return (
            <div className={wrapperClassNames}>
                <canvas height="400" width="400" id="progress-bar"></canvas>
                <div className="counter-container">
                    <div className="counter-units">
                        <TimeUnit 
                            changeTime={this.handleChange} 
                            ifEmpty={this.handleBlur} 
                            appState={this.state.appState} 
                            handleUnit={this.handleUnit} 
                            minutes={this.state.minutes} 
                            seconds={this.state.seconds}
                        />
                    </div>
                    <ActionButton
                        appState={this.state.appState}
                        startCounter={this.handleStartCounter}
                        pauseCounter={this.handlePauseCounter}
                        setCounter={this.handleSetCounter}
                    />
                </div>
                <Modal
                    show={this.state.show}
                    handleClose={this.hideModal}
                />
            </div>
        );
    }
}

export default Counter;






//KNOWN BUGS
//------------------

/*
1. **RESOLVED** Minutes value can be negative

2. **RESOLVED** Minutes value can be more than 999. Causing that the value is not fully displayed in the field.

3. **RESOLVED** Counter is starting even when value is 00:00. Prevent that with some warning. "You cannot get water out of a stone. Please provide some value to start the counter"

4. **RESOLVED** Add and Sub buttons are available in all states. Should be available only in 'set' state. 

5. **RESOLVED** Value after manually removing can be empty.

6. **RESOLVED** When value were paused at 0:0 and the run back - the modal appears.


*/


//IMPROVEMENTS
//------------------

/*
1. Message when count is done.

2. Message when error occurs.

4. Message when trying to get less than 0 minutes.

5. Error handling

6. **DONE** Styling for buttons

7. Engine for Pomodoro (Settingtime for focus and for breaks, Browser tab focused when counting is over)

8. Tabs on top (for regular timer and pomodoro)

9. Side info

10. **DONE** Optimize code in TimeUnit.js (create one reusable chunk of code)

11. Prettier design (mm) : (ss)

12. **DONE** Radial progress bar

*/