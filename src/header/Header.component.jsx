import React, { Component } from 'react';
import logo from '../Images/logo-white.png';

export default class Header extends Component {
    url = "#";
    render() {
        return (
            <div className="header">
                <div className="logo-box">
                    <img alt="logo" src={logo} className="logo" />
                </div>


                <div className="title-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main">Zoho Tours</span>
                    <span className="heading-primary-sub">Your Way to Success</span>
                </h1>
                <a href={this.url} className="btn btn-white">Travel Planner</a>
                </div>
            </div>
        )
    }
}
