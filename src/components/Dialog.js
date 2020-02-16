import React, { Component } from 'react';

let dialogStyle = {
    width: '500px',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '999',
    backgroundColor: '#eee',
    padding: '10px 20px 40px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column'
}

export class Dialog extends Component {
    render() {
        let dialog = (
            <div style={dialogStyle}>
                <button onClick={this.props.onClose}>x</button>
                {this.props.children}
            </div>
        )
        if(!this.props.isOpen) {
            dialog = null;
        }
        return (
            <div>
                {dialog}
            </div>
        )
    }
}

export class MultiDialog extends Component {
    render() {
        let dialog = (
            <div style={dialogStyle}>
                <button onClick={this.props.onClose}>x</button>
                {this.props.dialogContent}
            </div>
        )
        if(!this.props.isOpen) {
            dialog = null;
        }
        return (
            <div>
                {dialog}
            </div>
        )
    }
}
