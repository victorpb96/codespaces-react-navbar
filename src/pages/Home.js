import React, { Component } from 'react';
import wheelchair from './../assets/wheelchair-carer.png';
import './Home.css';

export default function Home() {
    return <><h1></h1>
    <div className="Home-blurb">
      Ndis funded support workers that cater to your support needs, we are able to provide specialised support aimed to meet your needs up to 24/7 care.
    </div>

    <div className="welcome-photo">
      <img src={require('./../assets/wheelchair-carer.png')} alt="Wheelchair-carer" width="200px"></img>
    </div>
    
    </>
  }