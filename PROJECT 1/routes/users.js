import express from "express"
import {handleGetAllUsers,getUserById,createNewUser} from "../controllers/users.controllers.js";


const router = express.Router()


router.get('/', (req, res) => {
    res.send('Welcome to my Home page');
})

router.get('/api/users', handleGetAllUsers)
router.get('/api/users/:id', getUserById)
router.post('/', createNewUser)

export default router