import Product from "../module/productModule.js"

export const getProduct = async (req, res) => {
    try {
        const product = await Product.find({})
        if (product) {
            return res.status(200).json({
                success: true,
                mesage: "list of product....",
                product
            })
        } else {
            return res.status(404).json({
                success: false,
                mesage: "product not found",
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            mesage: error.mesage
        })
    }
}

//post all product
export const postProduct = async (req, res) => {
    try {
        const { title, price, description, category, image } = req.body
        if (!title || !price || !description || !category || !image) {
            return res.status(422).json({
                success: false,
                mesage: "All field is reuired",
            })
        }

        let product = await Product({ title, price, description, category, image })

        product = await product.save()
        res.status(200).json({
            success: true,
            mesage: "product added",
            product
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            mesage: error.mesage,
        })
    }
}

//get product by id
export const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById({ _id: id });
        if (product) {
            return res.status(200).json({
                success: true,
                mesage: "single product ",
                product
            })
        } else {
            return res.status(404).json({
                success: false,
                mesage: "product not found",
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            mesage: error.mesage,
        })
        console.log("errorrrr->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", error);
    }
}  
