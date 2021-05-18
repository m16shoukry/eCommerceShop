import express from 'express'
import { 
    addOrderItems,
} from '../controllers/orderController.js'
import { protect } from '../middleware/authMidleware.js'

const router = express.Router()

router.post('/', protect, addOrderItems)



export default router