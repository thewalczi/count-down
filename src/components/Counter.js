import React from "react";
import ReactDOM from "react-dom";

class Hello extends React.Component {
    render() {
        return (
            <React.Fragment>
            	<h1>Hello from the other side</h1>
            	<p>I must've called a thousand times</p>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<Hello />, document.getElementById('app'));

export default Hello;