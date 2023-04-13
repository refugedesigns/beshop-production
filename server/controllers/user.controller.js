const asyncHandler = require("express-async-handler")
const { StatusCodes } = require("http-status-codes")
const User = require('../models/user.model')

const getAllUsers = asyncHandler(async(req, res) => {
    const users = await User.find({role: "user"}).select('-password')
    res.status(StatusCodes.OK).json({users})
})


const getSingleUser = asyncHandler(async(req, res) => {
    const { id: userId } = req.params 

    const user = await User.findOne({_id: userId}).select('-password')

    res.status(StatusCodes.OK).json({user})
})


const showCurrentUser = asyncHandler(async(req, res) => {
    res.status(StatusCodes.OK).json({user: req.user})
})


const updateUser = asyncHandler(async(req, res) => {
    res.send("Update user route")
})


const updateUserPassword = asyncHandler(async(req, res) => {
    res.send("Update user password route")
})

module.exports = {
    getAllUsers,
    getSingleUser,
    updateUserPassword,
    updateUser,
    showCurrentUser
}