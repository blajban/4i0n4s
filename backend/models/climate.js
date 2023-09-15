const database = require('../db/database.js');

const climate = {
    getReadings: async (req, res) => {
        const db = await database.openDb();

        const allReadings = await db.all(`SELECT *, ROWID as id FROM climate ORDER BY ROWID DESC`);

        await db.close();

        return res.json({
            data: allReadings
        });
        
        /*var db = await database.openDb();

        var allTickets = await db.all(`SELECT *, ROWID as id FROM tickets ORDER BY ROWID DESC`);

        await db.close();

        return res.json({
            data: allTickets
        });
        */
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
        /*
        const result = await db.run(
            `INSERT INTO climate (date, time, temp, humidity) VALUES (?, ?, ?, ?)`,
            req.body.date,
            req.body.time,
            req.body.temp,
            req.body.humidity,
        );

        await db.close();

        return res.json({
            data: {
                id: result.lastID,
                date: req.body.date,
                time: req.body.time,
                temp: req.body.temp,
                humidity: req.body.humidity
            }
        });
        */
    }
};

module.exports = climate;
