import React, { Component } from 'react'

class Pro_14 extends Component {

    // To change the request data before sending it to the server, set the transformRequest property in the config object. 
    // Note that this method only works for PUT, POST, and PATCH request methods.
    transformData1() {
        const options = {
            method: 'post',
            url: '/login',
            data: {
              firstName: 'Finn',
              lastName: 'Williams'
            },
            transformRequest: [(data, headers) => {
              // transform the data
          
              return data;
            }]
        };
          
        // send the request
        axios(options);
    }

    //To modify the data before passing it to then() or catch(), you can set the transformResponse property:
    transformData2() {
        const options = {
            method: 'post',
            url: '/login',
            data: {
              firstName: 'Finn',
              lastName: 'Williams'
            },
            transformResponse: [(data) => {
              // transform the response
          
              return data;
            }]
          };
          
        // send the request
        axios(options);
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Pro_14.js
