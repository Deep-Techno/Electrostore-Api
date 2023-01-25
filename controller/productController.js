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


const all_product_details = async (req, resp) => {
    //    console.log(req.user)
    const products = await productSchema.find({})
    resp.status(200).json({ productDetails: products })

}


const deleteProduct = async (req, resp) => {

    const { id } = req.params
    console.log(id);
    const product = await productSchema.findById(id)
    await product.remove();
    resp.status(200).json({ msg: "record is deleted" })



}



module.exports = { storeProduct, all_product_details, deleteProduct }