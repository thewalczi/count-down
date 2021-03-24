import React, {Component} from "react";
import PropTypes from "prop-types";


class ActionButton extends Component {

    render() {

        let button;

        const AppOnSet = () => {
            return <button className="button-start" onClick={this.props.startCounter}></button>
        };
    
        const AppOnRun = () => {
            return <button className="button-pause" onClick={this.props.pauseCounter}></button>
        };

        const AppOnPause = () => {
            return (
                <React.Fragment>
                    <button className="button-start" onClick={this.props.startCounter}></button>
                    <button className="button-set" onClick={this.props.setCounter}></button>
                </React.Fragment>
            )
        }
    
        const AppOnEnd = () => {
            return <button className="button-set" onClick={this.props.setCounter}></button>
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