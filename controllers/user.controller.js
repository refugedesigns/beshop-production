const asyncHandler = require("express-async-handler")
const { StatusCodes } = require("http-status-codes")
const User = require('../models/user.model')
const { UnauthenticatedError, BadRequestError } = require("../errors")
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


const showCurrentUser = asyncHandler(async (req, res) => {
  const user = await User.findOne({_id: req.user._id}).populate({path: "viewedProducts", select: "name image price"}).populate({path: "wishlist", select: "name price productNumber image isStocked"}).select("-password -resetPasswordToken")
  if(!user) {
    throw new UnauthenticatedError(`No user with id ${req.user._id}`);
  }
  
  res.status(StatusCodes.OK).json({ user });
});

const updateUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email } = req.body;

  const user = await User.findOne({ _id: req.user._id });

  if(!user) {
    throw new UnauthenticatedError(`No user with id ${req.user._id}`);
  }

  user.email = email;
  user.firstName = firstName;
  user.lastName = lastName;

  let savedUser = await user.save();

  savedUser = savedUser._doc;

  delete savedUser.password;
  delete savedUser.resetPasswordToken;
  delete savedUser.resetPasswordTokenExpiration;

  const userToken = createUserToken(savedUser);

  attachAccessToken({ res, user: userToken });

  res.status(StatusCodes.OK).json({ user: savedUser });
});

const updateViewedProducts = asyncHandler(async (req, res) => {
  const {productId} = req.body;

  const userData = await User.findOne({_id: req.user._id})

  let viewedProducts = userData.viewedProducts.map(product => product.toString())

  if(viewedProducts.includes(productId)) {
    throw new BadRequestError(`Already viewed: ${productId}`)
  }

  const user = await User.findByIdAndUpdate(
    req.user._id,
    {"$push": {"viewedProducts": productId}},
    { new: true}
  )
    .populate({ path: "viewedProducts", select: "image name price" })
    .populate({
      path: "wishlist",
      select: "name productNumber image price isStocked",
    });

  res.status(StatusCodes.OK).json({ user });
});

const updateWishlist = asyncHandler(async (req, res) => {
  const {productId} = req.body;

  let user = await User.findOne({_id: req.user._id})

  const existingWishlist = user.wishlist.map((item) => item.toString());

  if(existingWishlist.includes(productId)) {
    throw new BadRequestError("Item already exists in wishlist")
  }

  user = await User.findByIdAndUpdate(
    req.user._id,
    {"$push": {"wishlist": productId}},
    { new: true }
  )
    .populate({ path: "viewedProducts", select: "image name price" })
    .populate({
      path: "wishlist",
      select: "name productNumber image price isStocked",
    });

  res.status(StatusCodes.OK).json({ user });
});

const clearWishlistItems = asyncHandler(async(req, res) => {
  const user = await User.findByIdAndUpdate(req.user._id, {wishlist: []}, {new: true})

  res.status(StatusCodes.OK).json({user})
})

const updateUserPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const user = await User.findOne({ _id: req.user._id });

  const correctPassword = await user.comparePassword(oldPassword);

  if (!correctPassword) {
    throw new UnauthenticatedError("Invalid Credentials");
  }

  user.password = newPassword;

  await user.save();

  res.status(StatusCodes.OK).json({ msg: "Success! Password Updated." });
});

module.exports = {
  getAllUsers,
  getSingleUser,
  updateUserPassword,
  updateUser,
  showCurrentUser,
  updateViewedProducts,
  updateWishlist,
  clearWishlistItems
};