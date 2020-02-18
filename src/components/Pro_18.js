import React, { Component } from 'react';
import { connect } from 'react-redux';

class Pro_18 extends Component {



    // state = {
    //     age: 21
    // }

    // onAgeUp = () => {
    //     this.setState({ 
    //         ...this.state,
    //         age: ++this.state.age
    //      })
    // }

    // onAgeDown = () => {
    //     this.setState({ 
    //         ...this.state,
    //         age: --this.state.age
    //      })
    // }

    render() {
        return (
            <div>
                <div>Age: <span>{this.props.age}</span></div>
                <button onClick={this.props.onAgeUp}>Age Up</button>
                <button onClick={this.props.onAgeDown}>Age Down</button>
            </div>
        )
    }
}

// When the state is changes be able to subscribe it
const mapStateToProps = (state) => {
    return {
        age: state.age
    }
}

// In order to access the store we need to map our props with it
// Dispatch actions
const mapDispatchToProps = (dispatch) => {
    return {
        onAgeUp: () => dispatch({type: 'AGE_UP'}),
        onAgeDown: () => dispatch({type: 'AGE_DOWN'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pro_18);
