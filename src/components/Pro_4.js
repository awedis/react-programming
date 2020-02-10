import React, { Component } from 'react'

export default class Pro_4 extends Component {
    users = [
        {
          id: 1,
          name: "Jack Bauer",
          email: "jack.bauer@ctu.gov",
          phone: "+358509283928"
        },
        {
          id: 2,
          name: "Tony Almeida",
          email: "tony.almeida@ctu.gov",
          phone: "+358508829378"
        },
        {
          id: 3,
          name: "Chloe O'brian",
          email: "chloe.obrian@ctu.gov",
          phone: "+358508899012"
        }
    ];
    render() {
        return (
            <React.Fragment>
                {this.users.map(user => (
                <React.Fragment key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                </React.Fragment>
                ))}
            </React.Fragment>
        )
    }
}
