import express from 'express'
import { authUser,registerUser,logoutUser,getUserProfile,updateuserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
// import userModel from '../models/user.model.js'


const router = express.Router();

router.post('/',registerUser)
router.post('/auth',authUser)
router.post('/logout',logoutUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateuserProfile)

export default router;

// 1 register
// 2,3 logut