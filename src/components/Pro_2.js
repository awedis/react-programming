import React, { Component } from 'react'

export default class Pro_2 extends Component {
    render() {
        return (
            <table border="1">
                <thead>
                    <tr><th>Data</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <Columns />
                    </tr>
                </tbody>
            </table>
        )
    }
}

class Columns extends React.Component {
    render() {
      return (
        <React.Fragment>
          <td>Hello</td>
          <td>World</td>
        </React.Fragment>
      );
    }
}
