import React from 'react';

class Pro_1 extends React.Component {
    constructor() {
        super();
        this.state = {
            active: null
        };
    }
    toggle(position) {
        if (this.state.active === position) {
            this.setState({ active : null });
        } else {
            this.setState({ active : position });
        }
    }
    myColor(position) {
        if (this.state.active === position) {
            return "blue";
        } else {
            return "";
        }
    }
    render(){
        return (
            <div>
                <li style={{ backgroundColor: this.myColor(0) }} onClick={ () => {this.toggle(0) }}>One</li>
                <li style={{ backgroundColor: this.myColor(1) }} onClick={ () => {this.toggle(1) }}>Two</li>
                <li style={{ backgroundColor: this.myColor(2) }} onClick={ () => {this.toggle(2) }}>Three</li>
            </div>
        );
    }
}

export default Pro_1;