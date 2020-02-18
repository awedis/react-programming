import React, { Component } from 'react'
import { connect } from 'react-redux';

class Pro_21 extends Component {
    render() {
        return (
            <div>
                <div>your age: <span>{this.props.age}</span></div>
                <button onClick={this.props.onAgeUp}>Age Up</button>
                <button onClick={this.props.onAgeDown}>Age Down</button>
            </div>
        )
    }
}

const mapStoreToProps = (state) => {
    return {
        age: state.age
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAgeUp: () => dispatch({ type: 'AGE_UP', payload: 1 }),
        onAgeDown: () => dispatch({ type: 'AGE_DOWN', payload: 1 })
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Pro_21);