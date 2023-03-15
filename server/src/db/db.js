import sqlite3 from 'sqlite3';

const sqldb = sqlite3.verbose();
const DBSOURCE = "src/db/data.db";

const db = new sqldb.Database(DBSOURCE, (err) => {
  if (err) {
    console.error('Cannot open Database ' + err.message) 
  } else {
    //TODO remove SQL 
    const sqlCity = `CREATE TABLE city (
      city_id INTEGER PRIMARY KEY AUTOINCREMENT,
      city_name TEXT,
      city_year TEXT
      )`
    const sqlList = `CREATE TABLE list (
      list_id INTEGER PRIMARY KEY AUTOINCREMENT,
      list_sname TEXT,
      list_fname TEXT,
      list_color TEXT
    )`
    const sqlCityList = `CREATE TABLE citylist (
      list_id INTEGER NOT NULL,
      city_id INTEGER NOT NULL,
      PRIMARY KEY(list_id, city_id),
      FOREIGN KEY (list_id) REFERENCES list (list_id),
      FOREIGN KEY (city_id) REFERENCES city (city_id)
    )`
    db.run(sqlCity, (err) => {
      if (err) {
      console.log('Table city already created');
      } else {
        const sqlCity = 'INSERT INTO city (city_name, city_year) VALUES (?,?)';
        db.run(sqlCity, ["Париж","III век до н.э."]);
        db.run(sqlCity, ["Вена","1147 год"]);
        db.run(sqlCity, ["Берлин","1237 год"]);
        db.run(sqlCity, ["Варшава","1321 год"]);
        db.run(sqlCity, ["Милан","1899 год"]); 
      }
    }); 
    db.run(sqlList, (err) => {
      if (err) {
      console.log('Table list already created');
      } else {
        const sqlList = 'INSERT INTO list (list_sname, list_fname, list_color) VALUES (?,?,?)';
        db.run(sqlList, ["Европа","Города Европы", "зелёный"]); 
        db.run(sqlList, ["В","Города на букву В", "жёлтый"]);
      }
    }); 
    db.run(sqlCityList, (err) => {
      if (err) {
      console.log('Table citylist already created');
      } else {
        const sqlCityList = 'INSERT INTO citylist (list_id, city_id) VALUES (?,?)';
        db.run(sqlCityList, [1, 1]);
        db.run(sqlCityList, [1, 2]);
        db.run(sqlCityList, [1, 3]);
        db.run(sqlCityList, [1, 4]);
        db.run(sqlCityList, [2, 2]);
        db.run(sqlCityList, [2, 4]);
      }
    }); 
  }  
});

export default db;