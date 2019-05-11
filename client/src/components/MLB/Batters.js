import React, { Component } from "react";
import "./MLB.scss";

class Batters extends Component {
  renderScores = () => {
    let stats = [];
    let show =
      this.props.show === "away" ? this.props.awayStats : this.props.homeStats;
    for (let player of show) {
      stats.push(
        <React.Fragment key={player.display_name}>
          <div className="grid-container__player">
            {player.display_name} &middot;
            <span style={{ color: "lightgrey" }}> {player.position}</span>
          </div>
          <div className="grid-container__items">{player.at_bats}</div>
          <div className="grid-container__items">{player.runs}</div>
          <div className="grid-container__items">{player.hits}</div>
          <div className="grid-container__items">{player.walks}</div>
          <div className="grid-container__items">{player.rbi}</div>
        </React.Fragment>
      );
    }
    return <>{stats}</>;
  };

  render() {
    return (
      <>
        <p style={{ marginLeft: "10px" }}>
          <strong>Batting</strong>
        </p>
        <div className="grid-container-mlb">
          <div className="grid-container__player grid-container__player-grey">
            Player
          </div>
          <div className="grid-container__items">AB</div>
          <div className="grid-container__items">R</div>
          <div className="grid-container__items">H</div>
          <div className="grid-container__items">BB</div>
          <div className="grid-container__items">RBI</div>
          {this.renderScores()}
        </div>
      </>
    );
  }
}

export default Batters;
