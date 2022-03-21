import express from "express"
import { getListData } from "../controllers/Data.js"

const router = express.Router()
router.get('/get', getListData);
export default router;