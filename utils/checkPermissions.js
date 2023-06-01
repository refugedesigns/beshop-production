const { UnauthorizedError } = require("../errors")

const checkPermissions = (requestUser, resourceUserId) => {
    if(requestUser.role === 'admin') return 
    if(requestUser._id === resourceUserId) return

    throw new UnauthorizedError("Not authorized to access this resource.")
}

module.exports = checkPermissions;