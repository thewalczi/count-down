import React, {Component} from 'react';
import PropTypes from "prop-types";

class Modal extends Component {

    render() {

        let showHideClassName = this.props.show ? "modal__wrapper--show" : null;

        
        return (
            <div className={'modal__wrapper ' + showHideClassName}>
                <div className="modal__container">
                    <Message />
                    <button className="modal__button modal__close" onClick={this.props.handleClose}>Got it!</button>
                </div>
            </div>
        )
    }
}

class Message extends Component {

    render () {
        let label = "You cannot get water out of a stone.";
        let sublabel = "Please provide some value and start the counter.";

        return (
            <div class="modal__text">
                <h3 className="modal__text--label">{label}</h3>
                <p className="modal__text--sublabel">{sublabel}</p>
            </div>
        )
    }        
}

export default Modal;