import React, { Component } from "react";
import "./MLB.scss";

class Pitchers extends Component {
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
          <div className="grid-container__items">{player.innings_pitched}</div>
          <div className="grid-container__items">{player.hits_allowed}</div>
          <div className="grid-container__items">{player.earned_runs}</div>
          <div className="grid-container__items">{player.walks}</div>
          <div className="grid-container__items">{player.strike_outs}</div>
        </React.Fragment>
      );
    }
    return <>{stats}</>;
  };

  render() {
    return (
      <>
        <p style={{ marginLeft: "10px" }}>
          <strong>Pitching</strong>
        </p>
        <div className="grid-container-mlb">
          <div className="grid-container__player grid-container__player-grey">
            Player
          </div>
          <div className="grid-container__items">IP</div>
          <div className="grid-container__items">H</div>
          <div className="grid-container__items">ER</div>
          <div className="grid-container__items">BB</div>
          <div className="grid-container__items">SO</div>
          {this.renderScores()}
        </div>
      </>
    );
  }
}

export default Pitchers;
