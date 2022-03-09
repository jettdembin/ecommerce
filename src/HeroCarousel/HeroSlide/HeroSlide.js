import React from 'react';
import './HeroSlide.css'

import CallToAction from '../../CallToAction/CallToAction';

function HeroSlide(props) {
  return(
    <div className="HeroSlide" style={{backgroundImage: `url(${props.img})`}}>
      <CallToAction color={props.color} header={props.header} info={props.info}/>
    </div>
  )
}

export default HeroSlide;
