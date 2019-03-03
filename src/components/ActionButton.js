import React, {Component} from "react";
import PropTypes from "prop-types";


class ActionButton extends Component {

    render() {

        let button;

        const AppOnSet = () => {
            return <button onClick={this.props.startCounter}>Start</button>
        };
    
        const AppOnRun = () => {
            return <button onClick={this.props.pauseCounter}>Pause</button>
        };

        const AppOnPause = () => {
            return (
                <React.Fragment>
                    <button onClick={this.props.startCounter}>Resume</button>
                    <button onClick={this.props.setCounter}>Set time</button>
                </React.Fragment>
            )
        }
    
        const AppOnEnd = () => {
            return <button onClick={this.props.setCounter}>Set time</button>
        };

        if(this.props.appState === 'set'){
            button = <AppOnSet />
        }
        
        else if (this.props.appState === 'run'){
            button = <AppOnRun />
        }

        else if (this.props.appState === 'pause'){
            button = <AppOnPause />
        }
        
        else if (this.props.appState === 'end'){
            button = <AppOnEnd />
        }

        return (
            <div className="button-wrapper">
                {button}
            </div>
        )
    }       

}

export default ActionButton;