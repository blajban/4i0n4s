CREATE TABLE IF NOT EXISTS climate (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp TEXT DEFAULT (strftime('%Y-%m-%d %H:%M:%f', 'now', 'localtime')),
    temp FLOAT NOT NULL,
    humidity FLOAT NOT NULL
);
