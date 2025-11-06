import userModel from "../model/userModel.js";

export const createUser = async (req, res) => {
    try {
        const newUser = new userModel();
        const { email } = req.body;

        const existingUser = await user.FindOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        await newUser.save();
        const savedData = await newUser.save();
        res.status(201).json(savedData);

    } catch (error) {
        res.status(500).json({ message: "Error creating user", error });
    }
}