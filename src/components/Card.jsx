import React from "react";
import { v4 as uuid } from "uuid";

function Card(props) {

  function handleClick(e) {
    props.addFilter(e.target.innerHTML);
  }

  return (
    <div className={props.ad.featured ? "card card--featured" : "card"}>
      <div className="info">
        <img className="info__logo" src={props.ad.logo} alt="company logo" />
        <div className="info__text">
          <div className="info__top-details">
            <h3 className="info__company">{props.ad.company}</h3>
            {props.ad.new && <h3 className="info__new">NEW!</h3>}
            {props.ad.featured && <h3 className="info__featured">FEATURED</h3>}
          </div>
          <h2 className="info__position">{props.ad.position}</h2>
          <ul className="info__list">
            <li>{props.ad.postedAt}</li>
            <li>{props.ad.contract}</li>
            <li>{props.ad.location}</li>
          </ul>
        </div>
      </div>
      <div className="categories">
        <ul className="categories__tablets tablets">
          <li onClick={handleClick}>{props.ad.role}</li>
          <li onClick={handleClick}>{props.ad.level}</li>
          {props.ad.languages && props.ad.languages.map(item => {
            return (<li onClick={handleClick} key={uuid()}>{item}</li>)
          })}
          {props.ad.tools && props.ad.tools.map(item => {
            return (<li onClick={handleClick} key={uuid()}>{item}</li>)
          })}

        </ul>
      </div>
    </div >
  )
}

export default Card;