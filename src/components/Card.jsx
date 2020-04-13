import React from "react";

function Card(props) {

  function handleClick(e) {
    props.addFilter(e.target.innerHTML);
  }

  return (
    <div class={props.ad.featured ? "card card--featured" : "card"}>
      <div class="info">
        <img class="info__logo" src={props.ad.logo} alt="company logo" />
        <div class="info__text">
          <div class="info__top-details">
            <h3 class="info__company">{props.ad.company}</h3>
            {props.ad.new && <h3 class="info__new">NEW!</h3>}
            {props.ad.featured && <h3 class="info__featured">FEATURED</h3>}
          </div>
          <h2 class="info__position">{props.ad.position}</h2>
          <ul class="info__list">
            <li>{props.ad.postedAt}</li>
            <li>{props.ad.contract}</li>
            <li>{props.ad.location}</li>
          </ul>
        </div>
      </div>
      <div class="categories">
        <ul class="categories__tablets tablets">
          <li onClick={handleClick}>{props.ad.role}</li>
          <li onClick={handleClick}>{props.ad.level}</li>
          {props.ad.languages && props.ad.languages.map(item => (<li onClick={handleClick}>{item}</li>))}
          {props.ad.tools && props.ad.tools.map(item => (<li onClick={handleClick}>{item}</li>))}

        </ul>
      </div>
    </div >
  )
}

export default Card;