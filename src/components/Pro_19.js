import React, { Component } from 'react';
import { connect } from 'react-redux';

class Pro_18 extends Component {
    render() {
        return (
            <div>
                <div>Age: <span>{this.props.age}</span></div>
                <button onClick={this.props.onAgeUp}>Age Up</button>
                <button onClick={this.props.onAgeDown}>Age Down</button>
                <hr/>
                <div>History</div>
                <div>
                    <ul>
                        {
                            this.props.history.map(el => (
                                <li className="history" key={el.id} onClick={() => this.props.onDelItem(el.id)}>
                                    {el.age}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        age: state.age,
        history: state.history
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAgeUp: () => dispatch({type: 'AGE_UP', payload: 1}),
        onAgeDown: () => dispatch({type: 'AGE_DOWN', payload: 1}),
        onDelItem: (id) => dispatch({type: 'DEL_ITEM', key: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pro_18);