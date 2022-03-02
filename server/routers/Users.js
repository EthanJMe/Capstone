import express from 'express';
import { getUsers, addUsers } from '../controllers/Users.js';

const router = express.Router()

router.get('/get', getUsers);
router.post('/post', addUsers);
export default router;