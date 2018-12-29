import React from "react";

class ActionButton extends React.Component {

    render() {
        return (
            <button onClick={this.props.startCount}>Start</button>
        )
    }
}

export default ActionButton;