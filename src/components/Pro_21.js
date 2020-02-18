import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actionCreator from './store/action/actions';

class Pro_21 extends Component {
    render() {
        return (
            <div>
                <div>your age: <span>{this.props.age}</span></div>
                <button onClick={this.props.onAgeUp}>Age Up</button>
                <button onClick={this.props.onAgeDown}>Age Down</button>
                {this.props.loading && <p>Loading...</p>}
            </div>
        )
    }
}

const mapStoreToProps = (state) => {
    return {
        age: state.age,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAgeUp: () => dispatch(actionCreator.ageUp(1)),
        onAgeDown: () => dispatch(actionCreator.ageDown(1))
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Pro_21);