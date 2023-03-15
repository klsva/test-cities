import asyncHandler from 'express-async-handler';
import db from '../db/db.js';

export default {
  //creates new list
  create: asyncHandler(async (req, res, next) => {
    let errors = [];
    if (!req.body.sname){
      errors.push("No list short name!")
    }
    if (!req.body.fname){
      errors.push("No list full name!")
    }
    if (!req.body.color){
      errors.push("No list color!")
    }
    const { sname, fname, color, cityIds } = req.body;
    const sqllist = `INSERT INTO list (list_sname, list_fname, list_color) VALUES (?,?,?)`;
    const params = [sname, fname, color];
    //prepare query
    // let placeholders = cityId.map((cityId) => '(?,?)').join(',');
    // let sqlCityList = 'INSERT INTO citylist (list_id, city_id) VALUES ' + placeholders;

    //create row in list table
    await db.run(sqllist, params, function(err, result){
      if (err) {
        return res.status(400).json({"error": err.message})
      } else {
        //create rows in citylist table
        let listId = this.lastID
        console.log(listId);
        let sqlCityList = 'INSERT INTO citylist (list_id, city_id) VALUES (?,?)'
        for (let i=0; i < cityIds.length; i++){
          console.log('yes');
          db.run(sqlCityList, [listId, cityIds[i]], function(err, result){
            if (err) {
              return res.status(400).json({"error": err.message})
            }
            
          })
          console.log([listId, cityIds[i]]);
        }
        return res.status(201).json({"message":"created", "listID": this.lastID})
      }      
    });   
  }),

  //gets lists
  getAll: asyncHandler(async (req, res, next) => {
    const sql = `SELECT * FROM list ORDER BY list_sname`;
    const params = [];
    await db.all(sql, params, (err, rows) => {
      if (err){
        return res.status(400).json({"error": err.message})
      }
      return res.status(200).json(rows);
    })    
  }),

  //gets the list
  getOne: asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const sql = `SELECT city.city_id, city.city_name, city.city_year FROM city 
    LEFT JOIN citylist ON citylist.city_id = city.city_id
    LEFT JOIN list ON list.list_id = citylist.list_id
    WHERE list.list_id = ?`;
    await db.all(sql, id, (err, rows) => {
      if(err) {
        return res.status(400).json({"error": err.message})
      }
      return res.status(200).json(rows);
    })
  }),

  //updates the list
  update: asyncHandler(async (req, res, next) => {
    
  }),

  //delete the list
  delete: asyncHandler(async (req, res, next) => {
    
  })
}

