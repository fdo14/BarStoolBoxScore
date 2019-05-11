import React, { Component } from "react";
import BoxScore from "./NBA/BoxScore";
import { GraphQLClient } from "graphql-request";
import { CREATE_NBADATA_MUTATION } from "../graphql/query";

class NBA extends Component {
  state = { data: {}, loading: true };

  componentDidMount() {
    this.getNba();
  }

  getNba = async () => {
    const client = new GraphQLClient("http://localhost:4000");
    const data = await client.request(CREATE_NBADATA_MUTATION);
    this.setState({ data: data.createNBAData.games, loading: false });
  };

  render() {
    const { data, loading } = this.state;

    return (
      <>
        {!loading && (
          <div>
            <BoxScore
              teams={[data.away_team.full_name, data.home_team.full_name]}
              score={[data.away_totals.points, data.home_totals.points]}
              teamName={[data.away_team.last_name, data.home_team.last_name]}
              periods={[data.away_period_scores, data.home_period_scores]}
              awayStats={data.away_stats}
              homeStats={data.home_stats}
            />
          </div>
        )}
      </>
    );
  }
}

export default NBA;
