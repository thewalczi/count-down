import React from "react";
import ReactDOM from "react-dom";
import TimeUnit from "./TimeUnit";
import style from "../css/style.scss";

class Counter extends React.Component {
    render() {
        return (
            <div className="counter-wrapper">
            	<TimeUnit />

            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

export default Counter;