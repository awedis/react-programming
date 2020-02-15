import React, { Component } from 'react';
import axios from 'axios';

class Pro_15 extends Component {

    // pre- and postprocess HTTP requests. 
    // Preprocessing happens before requests are executed. This can be used to change request configurations. Postprocessing happens once responses have been received

    requestInterceptor() {
        // declare a request interceptor
        axios.interceptors.request.use(config => {
            // perform a task before the request is sent
            console.log('Request was sent');
            return config;
        }, error => {
            // handle the error
            return Promise.reject(error);
        });
  
        // sent a GET request
        axios.get('https://api.github.com/users/mapbox')
        .then(response => {
            console.log(response.data.created_at);
        });
    }

    // Axios also provides a response interceptor, which allows you to transform the responses from a server on their way back to the application
    responseInterceptor() {
        // declare a response interceptor
        axios.interceptors.response.use((response) => {
            // do something with the response data
            console.log('Response was received');
            return response;
        }, error => {
            // handle the response error
            return Promise.reject(error);
        });
  
        // sent a GET request
        axios.get('https://api.github.com/users/mapbox')
        .then(response => {
            console.log(response.data);
        });
    }


        render() {
            return (
                <div>
                    <button onClick={ () => (this.requestInterceptor()) }>Call Api using Request Interceptor</button>
                    <button onClick={ () => (this.responseInterceptor()) }>Call Api using Response Interceptor</button>
                </div>
            )
        }
}

export default Pro_15;
