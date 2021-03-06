import React, { Component } from "react";
import Header from "../Header";
import Mariners from "../img/mariners.png";
import Angels from "../img/angels.png";
import Batters from "./Batters";
import Pitchers from "./Pitchers";
import Scores from "./Scores";

class BoxScore extends Component {
  state = { stats: "away", classAway: "active", classHome: "" };

  renderHeader = () => {
    let length = this.props.periods[0].length;
    let periods = [];
    for (let i = 1; i <= length; i++) {
      periods.push(
        <p className="box-score__header-mlb" key={`BoxScoreHeader${i}`}>
          <strong>{i}</strong>
        </p>
      );
    }
    return <>{periods}</>;
  };

  renderScores = i => {
    let scores = [];
    let count = 0;
    for (let score of this.props.periods[i]) {
      scores.push(
        <p className="box-score__header-mlb" key={`BoxScoreHeader${count}`}>
          {score}
        </p>
      );
      count++;
    }
    return <>{scores}</>;
  };

  render() {
    return (
      <div>
        <Header
          awayScore={this.props.score[0]}
          homeScore={this.props.score[1]}
          awayName={this.props.teams[0]}
          homeName={this.props.teams[1]}
          homeImg={Angels}
          awayImg={Mariners}
        />

        <div className="box-score">
          <Scores team="Team" total="T" function={this.renderHeader()} />
          <Scores
            team={this.props.teamName[0]}
            total={this.props.score[0]}
            function={this.renderScores(0)}
          />
          <Scores
            team={this.props.teamName[1]}
            total={this.props.score[1]}
            function={this.renderScores(1)}
          />
        </div>

        <div className="ui two item menu">
          <div
            className={`${this.state.classAway} item clickable`}
            onClick={() =>
              this.setState({
                stats: "away",
                classAway: "active",
                classHome: ""
              })
            }
          >
            {this.props.teamName[0]}
          </div>
          <div
            className={`${this.state.classHome} item clickable`}
            onClick={() =>
              this.setState({
                stats: "home",
                classAway: "",
                classHome: "active"
              })
            }
          >
            {this.props.teamName[1]}
          </div>
        </div>

        <Batters
          awayStats={this.props.awayStats}
          homeStats={this.props.homeStats}
          show={this.state.stats}
        />

        <Pitchers
          awayStats={this.props.awayPitcherStats}
          homeStats={this.props.homePitcherStats}
          show={this.state.stats}
        />
      </div>
    );
  }
}

export default BoxScore;
