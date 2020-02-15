import React, { Component } from 'react';
import axios from 'axios';

export default class Pro_12 extends Component {
    constructor() {
        super();
    }

    callApi() {
        axios.get('https://randomuser.me/api/')
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });

        // The fulfillment value is an object containing the following information
        // {
        //     `data` is the response that was provided by the server
        //     data: {},
           
        //     `status` is the HTTP status code from the server response
        //     status: 200,
           
        //     `statusText` is the HTTP status message from the server response
        //     statusText: 'OK',
           
        //     `headers` the headers that the server responded with
        //     All header names are lower cased
        //     headers: {},
           
        //     `config` is the config that was provided to `axios` for the request
        //     config: {},
           
        //     `request` is the request that generated this response
        //     It is the last ClientRequest instance in node.js (in redirects)
        //     and an XMLHttpRequest instance the browser
        //     request: {}
        //   }
    }

    callCustomHeader() {
        const options = {
            headers: {'X-Custom-Header': 'value'}
        };
          
        axios.post('/save', { a: 10 }, options);
    }

    callXSRF() {
        const options = {
            method: 'post',
            url: '/login',
            xsrfCookieName: 'XSRF-TOKEN',
            xsrfHeaderName: 'X-XSRF-TOKEN',
        };
          
        // send the request
        axios(options);
    }

    render() {
        return (
            <div>
                <button onClick={ () => (this.callApi()) }>Call Api</button>
            </div>
        )
    }
}
