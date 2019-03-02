import React, {Component} from "react";
import PropTypes from "prop-types";


class ActionButton extends Component {

    render() {

        let button;

        const AppOnSet = () => {
            return <button onClick={this.props.startCount}>Start</button>
        };
    
        const AppOnRun = () => {
            return <button>Pause</button>
        };
    
        const AppOnEnd = () => {
            return <button>Set time</button>
        };

        if(this.props.appState === 'set'){
            button = <AppOnSet />
        }
        else if (this.props.appState === 'run'){
            button = <AppOnRun />
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