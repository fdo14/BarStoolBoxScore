const NBA = require("./models/NBA");
const MLB = require("./models/MLB");
const request = require("request-promise");

module.exports = {
  Query: {
    createNBAData: async (root, args, ctx) => {
      const games = await NBA.find({ _id: "5ccb6d630cc9db3f54571fd9" });
      const url =
        "https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json";
      if (!games) {
        const gamesData = await request({ url, json: true });
        const newNBA = await new NBA({
          games: gamesData
        }).save();
        return newNBA;
      }
      const FIFTEEN_SEC = 15000;
      if (
        parseInt(new Date().getTime()) -
          parseInt(games[0].updatedAt.getTime()) <
        FIFTEEN_SEC
      ) {
        return games[0];
      } else {
        const gamesData = await request({ url, json: true });
        const updateGame = await NBA.findOneAndUpdate(
          { _id: "5ccb6d630cc9db3f54571fd9" },
          { $set: { games: gamesData } }
        );
        return updateGame;
      }
    },

    createMLBData: async (root, args, ctx) => {
      const games = await MLB.find({ _id: "5ccb8a7115bdee21dc11b1c2" });
      const url =
        "https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json";
      if (!games) {
        const gamesData = await request({ url, json: true });
        const newMLB = await new MLB({
          games: gamesData
        }).save();
        return newMLB;
      }
      const FIFTEEN_SEC = 15000;
      if (
        parseInt(new Date().getTime()) -
          parseInt(games[0].updatedAt.getTime()) <
        FIFTEEN_SEC
      ) {
        return games[0];
      } else {
        const gamesData = await request({ url, json: true });
        const updateGame = await MLB.findOneAndUpdate(
          { _id: "5ccb8a7115bdee21dc11b1c2" },
          { $set: { games: gamesData } }
        );
        return updateGame;
      }
    }
  }
};
