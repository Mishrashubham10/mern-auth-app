import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const singUp = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Hashing Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Creating new user using user model
    const newUser = new User({ username, email, password: hashedPassword });

    // Saving the user into db
    await newUser.save();

    res.status(201).json({ msg: 'User created successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err.message)
  }
};