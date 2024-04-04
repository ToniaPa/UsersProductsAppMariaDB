const productService = require("../services/product.services");


exports.findAll = async(req, res) => {
  console.log("Find all products");
  try {
    const result = await productService.findAll();
    res.status(200).json({data: result});
    console.log("Success in reading all products");
  } catch (err) {
    console.log(`Problem in reading products, ${err}`)    
  }
}

exports.findOne = async(req, res) => {  
  const product = req.params.product;
  console.log("Find product: " + product);
  try {
    const result = await productService.findOne(product)
    res.status(200).json({data: result});
  } catch(err) {
    console.log(`Problem in reading product, ${err}`)
 
  }
}

//
exports.create = async(req, res) => {
  const data = req.body
  console.log("Insert product: " + req.body)
  console.log("req: ", req)
  try {
    const result = await productService.createOne(data);
    res.status(200).json({data: result});
    console.log("Product inserted");
  } catch(err) {
    res.status(400).json({data: err})
    console.log("Problem in inserting product", err);   
  }
}

exports.update = async(req, res) => {   
  const product = req.params.product;  
  console.log("Update product: ", product);  
  const data = req.body
  console.log("data in update: ", data) 
  try {
    const result = await productService.updateOne(data);
    res.status(200).json({data: result});
    console.log("Success in updating product: ", product)
  } catch(err){
    res.status(400).json({data: err})
    console.log("Problem in updating product: ", err);   
  }
};

exports.delete = async(req, res) => { 
  const product = req.params.product;
  console.log("Delete product:", product);
  try {
    const result = await productService.deleteOne(product);
    res.status(200).json({data: result});
    console.log("Success in deleting product", product);
  } catch(err) {
    res.json({data: err});
    console.log("Problem in deleting product");  
  }
};