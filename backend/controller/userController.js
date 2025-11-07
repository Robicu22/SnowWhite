import User from "../model/userModel.js";

export const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const { email } = newUser;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const savedData = await newUser.save();
        res.status(201).json(savedData);

    } catch (error) {
        res.status(500).json({ message: "Error creating user", error });
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const userData = await User.find();
        if(!userData || userData.length === 0){
            return res.status(404).json({ message: "No users found" });
        }
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
}

export const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const userExists = await User.findById(id);
        if (!userExists) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(userExists);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user", error });
    }
}

export const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExists = await User.findById(id);
        if (!userExists) {
            return res.status(404).json({ message: "User not found" });
        }
        await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error });
    }
}

export const deleteUser = async (req, res) => {
    try{const id = req.params.id;
        const userExists = await User.findById(id);
        if (!userExists) {
            return res.status(404).json({ message: "User not found" });
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error });
    }
}