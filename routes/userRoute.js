const express=require("express")
const { registerUser, login, getAllUsers } = require("../controllers/userController")

const router=express.Router()

//register user
router.post('/register',registerUser)

//login user
router.post('/login',login)

//get User

router.get('/all-users',getAllUsers)

module.exports=router