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

const Singleproduct = async (req, resp) => {

    const { id } = req.params
    console.log(id);
    const product = await productSchema.findById(id)
  
    //resp.status(200).json({ singledata: product })
    resp.status(200).json([ product ])


}

const Updataproduct = async (req, resp) => {


    try {
        // Find the product by ID
        const product = await productSchema.findById(req.params.id);
        if (!product) {
          // If the student is not found, return a 404 status
          res.status(404).json({ message: 'Student not found' });
          return;
        }
        console.log(product.productName)
        // Update the product with the new data
        product.productName = req.body.productName || product.productName;
        product.productPrice = req.body.productPrice || product.productPrice;
        product.productDescription = req.body.productDescription || product.productDescription;
        product.productQuanitity = req.body.productQuanitity || product.productQuanitity;
        product.catagory = req.body.catagory || product.catagory;
        await product.save();
        // Return the updated student
        resp.json(product);
      } catch (err) {
        // If there is an error, return a 500 status
        resp.status(500).json({ message: 'Error updating student', error: err });
      }


 


}




module.exports = { storeProduct, all_product_details, deleteProduct ,Singleproduct,Updataproduct}