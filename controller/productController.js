const multer = require('multer');
const fs = require('fs');
const productSchema = require('../model/product')









const storeProduct = async (req, resp) => {

    const { productName, productPrice, productDescription, productQuanitity, catagory } = req.body
    console.log('data', productName, productPrice, productDescription, productQuanitity.catagory)
    //console.log(name,email)
    const image = req.file.filename;
    console.log(image)
    //   console.log(req.body.name)      //in this way we can get value of form inside body
    //  const {name,email}=req.body
    //   console.log(email)

    const createproduct = productSchema({
        productName: productName,
        productPrice: productPrice,
        productDescription: productDescription,
        productQuanitity: productQuanitity,
        catagory: catagory,
        image: image

    })

    await createproduct.save()
    resp.status(200).json({ msg: "data save " })





}



module.exports = { storeProduct }