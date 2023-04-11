const { Router } = require("express")
const {validateCreateUser} = require("../middlewares")
const {register } = require("../controllers")

const router = Router()

router.route("/register").post(validateCreateUser, register)

module.exports = router