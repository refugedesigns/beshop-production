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

  // TODO: Expires in should be 1 day but for texting it will be 10sec
  const oneDay = 1000 * 60;

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    signed: true,
    expires: new Date(Date.now() + oneDay),
  });
};

const attachRefreshToken = ({ res, user, refreshToken }) => {
  const refreshTokenJWT = createJWT({ payload: { user: user, refreshToken } });

  const longerExp = 1000 * 180;

  res.cookie("refreshToken", refreshTokenJWT, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
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
