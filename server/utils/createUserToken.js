const createUserToken = (user) => ({
  name: user.firstName,
  email: user.email,
  role: user.role,
  id: user._id
});

module.exports = createUserToken
