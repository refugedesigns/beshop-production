const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isThirdParty: {
        type: Boolean,
        default: false,
    },
    thirdPartyProvider: {
        type: String,
        default: 'N/A'
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'manager', 'user'],
        default: 'user'
    },
    profileImage: {
        type: String,
    },
    veficationToken: String,
    isVerified: {
        type: Boolean,
        default: false
    },
    verifiedDate: Date,
    resetPasswordToken: {
        type: String,
        default: ""
    },
    resetPasswordTokenExpiration: Date
})

userSchema.pre('save', async function() {
    if(!this.isModified('password')) return
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.comparePassword = async function(password) {
    const isMatch = await bcrypt.compare(password, this.password);
    return isMatch;
}


const User = model("User", userSchema)

module.exports = User