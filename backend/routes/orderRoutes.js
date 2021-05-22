import express from 'express'
import { 
    addOrderItems,
    getOrderById,
    updateOrderToPaid,
    getMyOrders,
} from '../controllers/orderController.js'
import { protect } from '../middleware/authMidleware.js'

const router = express.Router()

router.post('/', protect, addOrderItems)
router.get('/myorders', protect, getMyOrders)
router.get('/:id', protect, getOrderById)
router.put('/:id/pay', protect, updateOrderToPaid)



export default router