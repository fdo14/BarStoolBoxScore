import React, { Component } from "react";
import BoxScore from "./MLB/BoxScore";
import { GraphQLClient } from "graphql-request";
import { CREATE_MLBDATA_MUTATION } from "../graphql/query";

class MLB extends Component {
  state = { data: {}, loading: true };

  componentDidMount() {
    this.getMlb();
  }

  getMlb = async () => {
    const client = new GraphQLClient("http://localhost:4000");
    const data = await client.request(CREATE_MLBDATA_MUTATION);
    this.setState({ data: data.createMLBData.games, loading: false });
  };

  render() {
    const { data, loading } = this.state;
    return (
      <>
        {!loading && (
          <div>
            <BoxScore
              teams={[data.away_team.full_name, data.home_team.full_name]}
              score={[
                data.away_batter_totals.runs,
                data.home_batter_totals.runs
              ]}
              teamName={[data.away_team.last_name, data.home_team.last_name]}
              periods={[data.away_period_scores, data.home_period_scores]}
              awayStats={data.away_batters}
              homeStats={data.home_batters}
              awayPitcherStats={data.away_pitchers}
              homePitcherStats={data.home_pitchers}
            />
          </div>
        )}
      </>
    );
  }
}

export default MLB;
