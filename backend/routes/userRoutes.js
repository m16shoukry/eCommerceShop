import express from 'express'
import { 
    authUser, 
    getUserProfile, 
    registerUser, 
    updateUserProfile,
    getUsers,
    deleteUser,
    updateUser,
    getUserById
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMidleware.js'

const router = express.Router()

router.post('/login', authUser)

router.route('/profile')
.get(protect, getUserProfile)
.put(protect, updateUserProfile)

router.route('/')
.post(registerUser)
.get(protect, admin, getUsers)

router.route('/:id')
.delete(protect, admin, deleteUser)
.get(protect, admin, getUserById)
.put(protect, admin, updateUser)


export default router