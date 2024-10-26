import User from "../models/userModel.js";
import jwt from "jsonwebtoken"

const createToken = async (_id) => {
    return jwt.sign({_id}, process.env.SECRET_KEY, {noTimestamp: true})
}

export const login = async(req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.login(email,password)
        const token = await createToken(user._id)
        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export const signup = async (req, res) => {
    const {username, email, password} = req.body

    try {
        const user = await User.signup(username, email, password)
        const token = await createToken(user._id)
        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}