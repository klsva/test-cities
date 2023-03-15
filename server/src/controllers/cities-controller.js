import asyncHandler from 'express-async-handler';
import db from '../db/db.js';

export default {
  //creates new city
  create: asyncHandler(async (req, res, next) => {
    let errors = [];
    if (!req.body.name){
      errors.push("No city name!")
    }
    if (!req.body.year){
      errors.push("No year!")
    }
    const data = {
      name: req.body.name,
      year: req.body.year
    }
    const sql = `INSERT INTO city (city_name, city_year) VALUES (?,?)`;
    const params = [data.name, data.year];
    await db.run(sql, params, function(err, result){
      if (err) {
        return res.status(400).json({"error": err.message})
      }
      return res.status(201).json({"message":"created", "id" : this.lastID})
    })
  }),

  //gets list of cities
  getAll: asyncHandler(async (req, res, next) => {
    const sql = `SELECT * FROM city ORDER BY city_name`;
    const params = [];
    await db.all(sql, params, (err, rows) => {
      if (err){
        return res.status(400).json({"error": err.message})
      }
      return res.status(200).json(rows);
    })    
  }),

  //gets the city
  getOne: asyncHandler(async (req, res, next) => {
    const sql = `SELECT * FROM city WHERE city_id = ?`
    const { id } = req.params
    await db.get(sql, id, (err, row) => {
      if(err) {
        return res.status(400).json({"error": err.message})
      }
      return res.status(200).json(row);
    })
  }),

  //updates the city
  update: asyncHandler(async (req, res, next) => {
    const { name, year } = req.body;
    const { id } = req.params;
    const sql = `UPDATE city set 
                city_name = COALESCE(?,city_name), 
                city_year = COALESCE(?,city_year)
                WHERE city_id = ?
                `
    await db.run(sql, [name, year, id], function(err, result){
      if (err) {
        return res.status(400).json({"error": err.message})
      }
      return res.status(200).json({"changes": this.changes})
    })
  }),

  //delete the city
  delete: asyncHandler(async (req, res, next) => {
    const {id} = req.params;
    const sql = `DELETE FROM city WHERE id = ?`
    await db.run(sql, id, function(err, result){
      if (err) {
        return res.status(400).json({"error": err.message})
      }
      return res.status(200).json({"message":"deleted", "changes": this.changes})
    })
  })
}