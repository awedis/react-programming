import React, { Component } from 'react';
import axios from 'axios';

export default class Pro_12 extends Component {
    constructor() {
        super();
    }

    callApi() {
        axios.all([
            axios.get('https://api.github.com/users/mapbox'),
            axios.get('https://api.github.com/users/phantomjs')
        ])
        .then(responseArr => {
            //this will be executed only when all requests are complete
            console.log('Date created: ', responseArr[0].data.created_at);
            console.log('Date created: ', responseArr[1].data.created_at);
        });
    }

    // For convenience, Axios also provides a method called axios.spread() to assign the properties of the response array to separate variables. Here’s how you could use this method:
    // axios.spread() method is used to unpack values from the response array
    callApi2(){
        axios.all([
            axios.get('https://api.github.com/users/mapbox'),
            axios.get('https://api.github.com/users/phantomjs')
        ])
          .then(axios.spread((user1, user2) => {
            console.log('Date created: ', user1.data.created_at);
            console.log('Date created: ', user2.data.created_at);
        }));
    }

    render() {
        return (
            <div>
                <button onClick={ () => (this.callApi()) }>Call Multiple Apis</button>
                <button onClick={ () => (this.callApi2()) }>Call Multiple Apis using spread</button>
            </div>
        )
    }
}