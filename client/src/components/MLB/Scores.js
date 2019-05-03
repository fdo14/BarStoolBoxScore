import React from "react";

export default function Scores(props) {
  return (
    <div className="box-score__header box-score__header-grey">
      <p className="box-score__header-team">{props.team}</p>
      <div className="box-score__header-scores">
        {props.function}
        <p className="box-score__header-total">{props.total}</p>
      </div>
    </div>
  );
}
