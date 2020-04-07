import React from "react";

function Card(props) {
  return (
    <div class="card">
      <div class="info">
        <img class="info__logo" src={props.logo} alt="company logo" />
        <div>
          <div class="info__top-details">
            <h3 class="info__company">{props.company}</h3>
            {props.new && <h3 class="info__new">NEW!</h3>}
            {props.featured && <h3 class="info__featured">FEATURED</h3>}
          </div>
          <h2 class="info__position">{props.position}</h2>
          <ul class="info__list">
            <li>{props.postedAt}</li>
            <li>{props.contract}</li>
            <li>{props.location}</li>
          </ul>
        </div>
      </div>
      <div class="tablets">
        <ul class="tablets__list">
          <li>{props.role}</li>
          <li>{props.level}</li>
          {props.languages && props.languages.map(item => (<li>{item}</li>))}
          {props.tools && props.tools.map(item => (<li>{item}</li>))}

        </ul>
      </div>
    </div>
  )
}

export default Card;