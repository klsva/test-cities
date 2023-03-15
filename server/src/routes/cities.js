import { Router } from 'express';
import citiesController from '../controllers/cities-controller.js';
//import sanitizeRequests from '../middlewares/sanitize-request.js';

const router = Router();

router.post('/cities', citiesController.create);
router.get('/cities', citiesController.getAll);
router.get('/cities/:id', citiesController.getOne);
router.put('/cities/:id', citiesController.update);
router.delete('/cities/:id', citiesController.delete);

export default router;