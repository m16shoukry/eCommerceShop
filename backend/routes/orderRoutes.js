import express from 'express'
import { 
    addOrderItems,
    getOrderById,
    updateOrderToPaid,
    getMyOrders,
    getOrders,
    updateOrderToDelivered
} from '../controllers/orderController.js'
import { admin, protect } from '../middleware/authMidleware.js'

const router = express.Router()

router.route('/')
.post(protect, addOrderItems)
.get(protect, admin, getOrders)

router.get('/myorders', protect, getMyOrders)
router.get('/:id', protect, getOrderById)
router.put('/:id/pay', protect, updateOrderToPaid)
router.put('/:id/deliver', protect, admin, updateOrderToDelivered)



export default router