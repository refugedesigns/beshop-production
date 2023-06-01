const sendEmail = require("./sendEmail");

const sendVerificationEmail = async ({ origin, user }) => {
  const url = `${origin}/verify-email?token=${user.verificationToken}&email=${user.email}`;

  return sendEmail({
    subject: "Email Verification",
    url,
    user: { email: user.email, firstName: user.firstName },
    templateId: 1,
  });
};


module.exports = sendVerificationEmail