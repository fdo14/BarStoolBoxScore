import React, { Component } from "react";
import "./NBA.scss";

class Players extends Component {
  renderScores = () => {
    let stats = [];
    let show =
      this.props.show === "away" ? this.props.awayStats : this.props.homeStats;
    for (let player of show) {
      const position = player.is_starter ? player.position : "";
      stats.push(
        <>
          <div class="grid-container__player">
            {player.display_name} &middot;
            <span style={{ color: "lightgrey" }}> {position}</span>
          </div>
          <div class="grid-container__items">{player.minutes}</div>
          <div class="grid-container__items">
            {player.offensive_rebounds + player.defensive_rebounds}
          </div>
          <div class="grid-container__items">{player.assists}</div>
          <div class="grid-container__items">{player.points}</div>
        </>
      );
    }
    return <>{stats}</>;
  };

  render() {
    return (
      <div class="grid-container">
        <div class="grid-container__player grid-container__player-grey">
          Player
        </div>
        <div class="grid-container__items">Min</div>
        <div class="grid-container__items">Reb</div>
        <div class="grid-container__items">Ast</div>
        <div class="grid-container__items">Pts</div>
        {this.renderScores()}
      </div>
    );
  }
}

export default Players;
