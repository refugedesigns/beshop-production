const jwt = require("jsonwebtoken");

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
};

const isValidToken = (token) => {
  if(!token) return false;
  return jwt.verify(token, process.env.JWT_SECRET)
};

const attachAccessToken = ({ res, user }) => {
  const accessToken = createJWT({ payload: { user } });
  console.log(accessToken);
  // TODO: Expires in should be 1 day but for texting it will be 10sec
  //3600000 1000 * 60 * 60
  const oneDay = 3600000;

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "dev",
    signed: true,
    expires: new Date(Date.now() + oneDay),
  });
};

const attachRefreshToken = ({ res, user, refreshToken }) => {
  const refreshTokenJWT = createJWT({ payload: { user: user, refreshToken } });
  console.log(refreshTokenJWT);
  // 2592000000 1000 * 60 * 60 * 24 * 30
  const longerExp = 2592000000;

  res.cookie("refreshToken", refreshTokenJWT, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "dev",
    signed: true,
    expires: new Date(Date.now() + longerExp),
  });
};

module.exports = {
  createJWT,
  isValidToken,
  attachAccessToken,
  attachRefreshToken,
};
