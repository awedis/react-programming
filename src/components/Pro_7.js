import React, { Component, PureComponent } from 'react'

const Temp = (props) => {
    console.log('Render Temp');
    return (<div>{props.val}</div>);
}

export default class Pro_7 extends PureComponent {
    state = {
        val: 1
    }

    componentDidMount() {
        setInterval(() => {
            this.setState(() => {
                return { val : 1 }
            });
        }, 2000)
    }



    // // when we call setState whats the next state will pass here (nextState)
    // shouldComponentUpdate(nextProp, nextState) {
    //     // if state are not changed we dont want to do render => than we return false
    //     // if this function returns false it will not render.
    //     // if we return true than it will render
    //     console.log('nextState', nextState);
    //     console.log('currentState', this.state);
    //     return ( this.state.value === nextState.value ? false : true );
    // }

    render() {
        console.log('Render App');
        return (
            <div>
                <Temp val={this.state.val} />
            </div>
        )
    }
}

