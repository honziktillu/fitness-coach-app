import { Request, Response } from "express";
import db from "../models/index";
import { genSalt, hash } from "bcrypt";

const User = db.users;
const AccountRoles = db.accountRoles;

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    if (!users || users.length == 0)
      return res.status(500).send({ msg: "Users not found" });
    const ownerRole = await AccountRoles.findOne({ where: { name: "owner" } });
    const ownerAccounts = await ownerRole.getUser();
    return res.status(200).send({
      msg: "Users found",
      payload: users,
      ownerAccounts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // const id = req.params.id
    if (!id) return res.status(400).send({ msg: "Missing details!" });
    const user = await User.findOne({ where: { id: id } });
    if (!user) return res.status(404).send({ msg: "User not found!" });
    return res.status(200).send({ msg: "User found!", payload: user });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, username, password } = req.body;
    if (!email || !username || !password)
      return res.status(400).send({ msg: "Missing details!" });
    const user = await User.findOne({ where: { email: email } });
    if (user) return res.status(400).send({ msg: "User already exists!" });
    const salt = await genSalt(10);
    const passwordHash = await hash(password, salt);
    const createdUser = await User.create({
      email: email,
      username: username,
      password: passwordHash,
    });
    if (!createdUser)
      return res.status(500).send({ msg: "Something went wrong!" });
    await createdUser.addUserRole("user");
    return res.status(201).send({ msg: "User created", payload: createdUser });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (!id || !data) return res.status(400).send({ msg: "Missing details!" });
    const user = await User.findOne({ where: { id: id } });
    if (!user) return res.status(500).send({ msg: "User not found" });
    for (const ops of data) {
      user[ops.propName] = ops.value;
    }
    const action = await user.save();
    if (!action) return res.status(500).send({ msg: "Something went wrong" });
    return res.status(200).send({ msg: "User updated!", payload: user });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send({ msg: "Missing details!" });
    const user = await User.destroy({ where: { id: id } });
    if (!user) return res.status(400).send({ msg: "User not found!" });
    return res.status(200).send({ msg: "User deleted!" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
