import jwt from "jsonwebtoken";

const createTokenAndSaveCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
    expiresIn: "10d",
  });
  res.cookie("jwt", token, {
    httpOnly: true, // xss protection
    secure: process.env.NODE_ENV === "production", // https only in production
    sameSite: "strict", // csrf protection
  });
};
export default createTokenAndSaveCookie;
