const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({

productName:String,
productPrice:Number,
productDescription:String,
productQuanitity:Number,
catagory:String,
image:String


})
 module.exports=mongoose.model('product',productSchema)
// const user =mongoose.model('user',userSchema)
// module.exports={user}

