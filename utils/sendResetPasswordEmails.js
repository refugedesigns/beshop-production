const sendEmail = require("./sendEmail");

const sendResetPasswordEmail = async ({ origin, passwordToken, user }) => {
  const url = `${origin}/reset-password?token=${passwordToken}&email=${user.email}`;

  return sendEmail({
    subject: "Reset Your Password",
    url,
    user: { email: user.email, firstName: user.firstName },
    templateId: 3,
  });
};

module.exports = sendResetPasswordEmail;
