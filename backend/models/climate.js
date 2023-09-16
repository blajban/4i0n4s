const database = require('../db/database.js');

const climate = {
  getReadings: async (req, res) => {
    const db = await database.openDb();

    const allReadings = await db.all(`SELECT *, ROWID as id FROM climate ORDER BY ROWID DESC`);

    await db.close();

    return res.json({
      data: allReadings
    });
  },

  getReadingById: async (req, res, next) => {
    const db = await database.openDb();

    const reading = await db.get(`SELECT * FROM climate WHERE id = ?`, req.params.id);

    await db.close();
1
    if (reading) {
      return res.json({
          data: reading
      });
    }

    next(new Error("Not found"));

  },

  addReading: async (req, res) => {
    const db = await database.openDb();

    const result = await db.run(
      `INSERT INTO climate (temp, humidity) VALUES (?, ?)`,
      req.body.temp,
      req.body.humidity,
    );

    await db.close();

    return res.json({
      data: {
        id: result.lastID,
        temp: req.body.temp,
        humidity: req.body.humidity
      }
    });
  },

  pingSensorDemo: async (req, res) => {
    const message = "PING SENSOR DEMO";
    return res.json({
      data: {
        msg: message
      }
    });
  }
};

module.exports = climate;
