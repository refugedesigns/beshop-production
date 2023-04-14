const asyncHandler = require("express-async-handler")
const { StatusCodes } = require("http-status-codes")
const User = require('../models/user.model')
const { UnauthenticatedError } = require("../errors")
const createUserToken = require("../utils/createUserToken")
const { attachAccessToken } = require("../utils")

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
    const { firstName, lastName, email } = req.body 

    const user = await User.findOne({_id: req.user._id})

    user.email = email
    user.firstName = firstName
    user.lastName = lastName

    let savedUser = await user.save()

    savedUser = savedUser._doc 

    delete savedUser.password 
    delete savedUser.resetPasswordToken
    delete savedUser.resetPasswordTokenExpiration

    const userToken = createUserToken(savedUser)

    attachAccessToken({res, user: userToken})

    res.status(StatusCodes.OK).json({user: savedUser})
})


const updateUserPassword = asyncHandler(async(req, res) => {

    const { oldPassword, newPassword } = req.body
    
    const user = await User.findOne({_id: req.user._id})

    const correctPassword = await user.comparePassword(oldPassword)

    if(!correctPassword) {
        throw new UnauthenticatedError("Invalid Credentials")
    }

    user.password = newPassword

    await user.save()

    res.status(StatusCodes.OK).json({msg: "Success! Password Updated."})
})

module.exports = {
    getAllUsers,
    getSingleUser,
    updateUserPassword,
    updateUser,
    showCurrentUser
}