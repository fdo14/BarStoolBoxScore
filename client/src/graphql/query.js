export const CREATE_NBADATA_MUTATION = `
  {
    createNBAData {
      _id
      games {
        away_team {
          full_name
          last_name
        }
        home_team {
          full_name
          last_name
        }
        away_period_scores
        home_period_scores
        home_stats {
          assists
          blocks
          minutes
          display_name
          defensive_rebounds
          offensive_rebounds
          position
          points
        }
        away_stats {
          assists
          blocks
          minutes
          display_name
          defensive_rebounds
          offensive_rebounds
          position
          points
        }
        away_totals {
          points
        }
        home_totals {
          points
        }
      }
    }
  }
  
`;
export const CREATE_MLBDATA_MUTATION = `
 {
   createMLBData {
      _id
      games {
        away_batters {
          display_name
          position
          at_bats
          runs
          hits
          walks
          rbi
        }
        home_batters {
          display_name
          position
          at_bats
          runs
          hits
          walks
          rbi
        }
        away_batter_totals {
          runs
        }
        home_batter_totals {
          runs
        }
        away_team {
          full_name
          last_name
        }
        home_team {
          full_name
          last_name
        }
        away_period_scores
        home_period_scores
        away_pitchers {
          display_name
          innings_pitched
          hits_allowed
          earned_runs
          walks
          strike_outs
        }
      }
   }
 }
`;
