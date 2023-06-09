import React, { Component } from 'react';
import "../styles/Art.css";
import ArtBanner from "../assets/iaback.jpg"

export default class Art extends Component {
  render() {
    return (
        <div className='art'style={{backgroundImage: `url(${ArtBanner})`}}>
            <div className='ArtContainer'>
            <h1>My Internet Art</h1>
            <h2>COMMING SOON</h2>

            </div>
        </div>
    )
  }
}
