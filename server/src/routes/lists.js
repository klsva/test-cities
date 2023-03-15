import { Router } from 'express';
import listsController from '../controllers/lists-controller.js';
//import sanitizeRequests from '../middlewares/sanitize-request.js';

const router = Router();

router.post('/lists', listsController.create);
router.get('/lists', listsController.getAll);
router.get('/lists/:id', listsController.getOne);
router.put('/lists/:id', listsController.update);
router.delete('/lists/:id', listsController.delete);

export default router;