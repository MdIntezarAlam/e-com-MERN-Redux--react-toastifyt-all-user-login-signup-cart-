import UserDetails from "../module/userDetail.js"

//user postdetails
export const userDetails = async (req, res) => {
    try {
        const { name, email, address, phone, city, pinCode, country, } = req.body
        if (!name || !email || !address || !phone, !city || !country || !pinCode) {
            return res.status(421).json({
                success: false,
                message: "All field is required"
            })
        }
        const details = await UserDetails({ name, email, address, phone, city, pinCode, country })
        await details.save()

        if (details) {
            return res.status(200).json({
                success: true,
                message: "user details",
                details
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

