
const sqlite3 = require('sqlite3').verbose();

class Database {

  constructor() {
    db = new sqlite3.Database('./db.db', sqlite3.OPEN_READWRITE, (err) => {
          if (err) {
              console.error(err.message);
            }
          console.log('Connected to the chinook database.');
        });
  }
}
