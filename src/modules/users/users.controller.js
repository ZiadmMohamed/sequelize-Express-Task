import userModel from "../../../DB/models/usersModel.js";
import bcrypt from "bcrypt";

export const Registration = async (req, res) => {
  const { userName, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const [user, created] = await userModel.findOrCreate({
    where: { email },
    defaults: { userName, email, password: hashedPassword },
  });

  return res.status(200).json({
    msg: created ? "User Registrated successfully" : "User already exists",
  });
};

export const logIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({
    where: { email },
  });

  if (!user) {
    return res.status(404).json({ msg: "User not found" });
  }

  console.log("Comparing passwords:", password, user.password);

  const isPasswordValid = await bcrypt.compare(password, user.password);
  console.log("Password valid:", isPasswordValid);

  if (!isPasswordValid) {
    return res.status(401).json({ msg: "Invalid password" });
  }

  return res.status(200).json({ user });
};

export const logOut = async (req, res) => {
  const { id } = req.params;
  const user = await userModel.findOne({ where: { id } });
  if (user) {
    user.destroy();
    return res.status(200).json("logedOut");
  }

  return res.status(400).json("not found");
};
