import User from "../module/userModule.js"
import bcrypt from 'bcrypt'
//signup user
export const userSignup = async (req, res) => {
    try {
        const { name, email, password, c_password, phone } = req.body

        if (!name || !email || !password || !c_password || !phone) {
            return res.status(421).json({
                success: false,
                message: "All field is required"
            })
        }
        let user = await User.findOne({ email })
        if (user) {
            return res.status(422).json({
                success: false,
                message: "Email Already exist"
            })
        } else if (password !== c_password) {
            return res.status(442).json({
                success: false,
                message: "password does not matches",
            })
        }

        user = await new User({ name, email, password, c_password, phone })
        user = await user.save()
        return res.status(200).json({
            success: true,
            message: "user signup suucessfully",
            user
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


//get all user
export const getUser = async (req, res) => {
    try {
        const user = await User.find({})
        if (user) {
            return res.status(200).json({
                success: true,
                user
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
//login user


export const userLogin = async (req, res) => {
    try {
        const { email, password, c_password } = req.body
        if (!email || !password || !c_password) {
            return res.status(421).json({
                success: false,
                message: "All field is required"
            })
        }

        let user = await User.findOne({ email })
        if (!user) {
            return res.status(422).json({
                success: false,
                message: "user does not found"
            })
        }

        else if (user) {
            const isMatch = await bcrypt.compare(password, user.password)
            if (isMatch) {
                res.status(200).json({
                    success: true,
                    message: "user logined successfully",
                    user
                })
            } else {
                return res.status(421).json({
                    success: false,
                    message: "Invalid Login details"
                })
            }
        }

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}