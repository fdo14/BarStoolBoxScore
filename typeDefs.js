const { gql } = require("apollo-server");

module.exports = gql`
  type NBAData {
    games: DataNBA
    _id: ID
  }

  type DataNBA {
    league: String
    away_team: Team
    home_team: Team
    event_information: Event
    away_period_scores: [Float]
    home_period_scores: [Float]
    home_stats: [Player]
    away_stats: [Player]
    away_totals: Totals
    home_totals: Totals
    officials: [Officials]
  }

  type Officials {
    first_name: String
    last_name: String
    position: String
  }

  type Totals {
    assists: Float
    blocks: Float
    defensive_rebounds: Float
    field_goal_percentage: Float
    field_goals_attempted: Float
    field_goals_made: Float
    free_throw_percentage: Float
    free_throws_attempted: Float
    free_throws_made: Float
    minutes: Float
    offensive_rebounds: Float
    personal_fouls: Float
    points: Float
    steals: Float
    three_points_field_goals_attempted: Float
    three_points_field_goals_made: Float
    three_points_percentage: Float
    turnovers: Float
  }

  type Event {
    attendance: Float
    duration: String
    season_type: String
    site: String
    start_date_time: String
    status: String
    temperature: Float
  }

  type Team {
    abbreviation: String
    active: Boolean
    city: String
    conference: String
    division: String
    first_name: String
    full_name: String
    last_name: String
    site_name: String
    state: String
    team_id: String
  }

  type Player {
    assists: Float
    blocks: Float
    defensive_rebounds: Float
    display_name: String
    field_goal_percentage: Float
    field_goals_attempted: Float
    field_goals_made: Float
    first_name: String
    free_throw_percentage: Float
    free_throws_attempted: Float
    free_throws_made: Float
    is_starter: Boolean
    last_name: String
    minutes: Float
    offensive_rebounds: Float
    personal_fouls: Float
    points: Float
    position: String
    steals: Float
    team_abbreviation: String
    three_points_field_goals_attempted: Float
    three_points_field_goals_made: Float
    three_points_percentage: Float
    turnovers: Float
  }

  type MLBData {
    games: DataMLB
    _id: ID
  }

  type DataMLB {
    away_batter_totals: BatterTotals
    away_batters: [Batter]
    away_errors: Float
    away_fielding: [Fielder]
    away_period_scores: [Float]
    away_pitchers: [Pitcher]
    away_team: Team
    event_information: Event
    home_batter_totals: BatterTotals
    home_batters: [Batter]
    home_errors: Float
    home_fielding: [Fielder]
    home_period_scores: [Float]
    home_pitchers: [Pitcher]
    home_team: Team
    league: String
    officials: [Officials]
  }

  type Pitcher {
    display_name: String
    earned_runs: Float
    era: Float
    errors: Float
    first_name: String
    hit_by_pitch: Float
    hits_allowed: Float
    hold: Boolean
    home_runs_allowed: Float
    innings_pitched: Float
    Floatentional_walks: Float
    last_name: String
    loss: Boolean
    pitch_count: Float
    pitch_order: Float
    pitches_strikes: Float
    runs_allowed: Float
    save: Boolean
    strike_outs: Float
    team_abbreviation: String
    walks: Float
    whip: Float
    wild_pitches: Float
    win: Boolean
  }

  type Fielder {
    display_name: String
    errors: Float
    first_name: String
    last_name: String
    team_abbreviation: String
  }

  type Batter {
    at_bats: Float
    at_bats_per_home_run: Float
    at_bats_per_rbi: Float
    avg: Float
    avg_string: String
    bat_order: Float
    batting_highlights: String
    caught_stealing: Float
    display_name: String
    doubles: Float
    extra_base_hits: Float
    first_name: String
    hit_by_pitch: Float
    hits: Float
    home_runs: Float
    last_name: String
    left_on_base: Float
    obp: Float
    obp_string: String
    ops: Float
    ops_string: String
    plate_appearances: Float
    plate_appearances_per_home_run: Float
    plate_appearances_per_rbi: Float
    position: String
    rbi: Float
    rbi_with_two_outs: Float
    runs: Float
    sac_flies: Float
    sac_hits: Float
    sacrifices: Float
    singles: Float
    slg: Float
    slg_string: String
    stolen_base_average: Float
    stolen_bases: Float
    strike_outs: Float
    strikeout_rate: Float
    sub_bat_order: Float
    team_abbreviation: String
    total_bases: Float
    triples: Float
    walk_rate: Float
    walks: Float
  }

  type BatterTotals {
    at_bats: Float
    at_bats_per_home_run: Float
    at_bats_per_rbi: Float
    avg: Float
    avg_string: String
    batting_highlights: String
    caught_stealing: Float
    doubles: Float
    extra_base_hits: Float
    hit_by_pitch: Float
    hits: Float
    home_runs: Float
    left_on_base: Float
    obp: Float
    obp_string: String
    ops: Float
    ops_string: String
    plate_appearances: Float
    plate_appearances_per_home_run: Float
    plate_appearances_per_rbi: Float
    rbi: Float
    rbi_with_two_outs: Float
    runs: Float
    sac_flies: Float
    sac_hits: Float
    sacrifices: Float
    singles: Float
    slg: Float
    slg_string: String
    stolen_base_average: Float
    stolen_bases: Float
    strike_outs: Float
    strikeout_rate: Float
    total_bases: Float
    triples: Float
    walk_rate: Float
    walks: Float
  }

  type Query {
    createMLBData: MLBData
    createNBAData: NBAData
  }
`;
