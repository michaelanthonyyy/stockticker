var yahooFinance = require("yahoo-finance");

module.exports = {
  null: function(req, res) {
    res.send("");
  },

  findDaily: function (req, res) {
    yahooFinance.historical(
      {
        symbol: req.params.ticker,
        period: "d",
      },
      function (err, quotes) {
        if (err) throw err;
        res.json(quotes);
      }
    );
  },

  findWeekly: function (req, res) {
    yahooFinance.historical(
      {
        symbol: req.params.ticker,
        period: "w",
      },
      function (err, quotes) {
        if (err) throw err;
        res.json(quotes);
      }
    );
  },

  findMonthly: function (req, res) {
    yahooFinance.historical(
      {
        symbol: req.params.ticker,
        period: "m",
      },
      function (err, quotes) {
        if (err) throw err;
        res.json(quotes);
      }
    );
  },

  findYearly: function (req, res) {
    yahooFinance.historical(
      {
        symbol: req.params.ticker,
        period: "y",
      },
      function (err, quotes) {
        if (err) throw err;
        res.json(quotes);
      }
    );
  },
};
