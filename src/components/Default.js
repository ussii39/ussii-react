import React, { Component } from 'react';

export default class Default extends Component {
    render() {
         console.log(this.props);


        return (
            <div className="container">
            <div className="cow">
            <div className="col-10 mx-auto text-center text-title text-uppercase pt5">
            <h1 className="display-3">404</h1>
            <h1>error</h1>
            <h2>page not found</h2>
             <h3>
             teh requested URL
             <span className="text-danger">
             {this.props.location.pathname}
             </span>{" "}
             was not found
             </h3>

            </div>
            </div>
            </div>
        );
    }
}
