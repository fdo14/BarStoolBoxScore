import React from "react";

const Header = props => {
  return (
    <div className="score">
      <div className="score--team">
        <img className="score--logo" src={props.awayImg} alt="" />
        {props.awayName}
      </div>
      <div className="score--points">{props.awayScore}</div>
      <div className="score--divider">-</div>
      <div className="score--points">{props.homeScore}</div>
      <div className="score--team">
        <img className="score--logo" src={props.homeImg} alt="" />
        {props.homeName}
      </div>
    </div>
  );
};

export default Header;
