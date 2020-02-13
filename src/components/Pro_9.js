import React, { Component } from 'react';

// First we will make a new context
const MyContext = React.createContext();

// Then create a provider Component
class MyProvider extends Component{
    state = {
        name: 'Wes',
        age: 100,
        cool: true
    }
    render() {
        return(
            <MyContext.Provider value={{
                state: this.state,
                growAYearOlder: () => this.setState({
                    age: this.state.age + 1
                })
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

const Family = (props) => (
    <div>
        <Person />
    </div>
)

class Person extends Component {
    render() {
        return(
            <div>
                <MyContext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <p>I'm inside the consumer {context.state.name}</p>
                            <p>I'm inside the consumer {context.state.age}</p>
                            <button onClick={context.growAYearOlder}>Add Age</button>
                        </React.Fragment>
                    )}
                </MyContext.Consumer>
            </div>
        )
    }
}

export default class Pro_9 extends Component {
    render() {
        return (
            <MyProvider>
                <div>
                    <p>I'm the app</p>
                    <Family />
                </div>
            </MyProvider>
        )
    }
}
