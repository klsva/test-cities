import { Router } from 'express';
import lists from './lists.js';
import cities from './cities.js';

const api = Router();

api.use(lists);
api.use(cities);

export default api;