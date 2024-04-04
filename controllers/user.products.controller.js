const userService = require("../services/user.services");
const userProductService = require("../services/user.products.services");
const productService = require("../services/product.services");

// find
exports.findAll = async(req, res) => {
  console.log("Find all users's products");
  try {   
    const result = await userService.findAll();
    res.status(200).json({data: result});
    console.log("Success in reading all users");
  } catch (err) {
    res.status(400).json({data: err})
    console.log(`Problem in reading users, ${err}`);  
  }
}

exports.findOne = async(req, res) => {
  console.log("Find a user's products");
  const username = req.params.username;
  try {
    const result = await userService.findOne(username)
    res.status(200).json({data: result});
  } catch(err) {
    res.status(400).json({data: err})
    console.log(`Problem in reading user: ${username}, ${err}`)
  }
}
//


exports.create = async (req, res)=>{
  const data = req.body; 
  console.log("Inserting a product for user");
  try {
    const result = await userProductService.createOne(data, req.params.username);
    res.status(200).json({data: result});
    console.log("User's product inserted");
  } catch(err) {
    res.status(400).json({data: err})
    console.log("Problem in inserting user's product ", err);
  }
}

exports.update = async (req, res)=>{
  const data = req.body;  
  console.log("Updating a product for user: " + data.username);
  try {
    const result = await productService.updateOne(data.product);
    res.status(200).json({data: result});
    console.log("Product was updated");
  } catch(err) {
    res.status(400).json({data: err})
    console.log("Problem in updating product ", err);
  }
}

exports.delete = async (req, res)=>{
  console.log("Deleting a product");
  const username = req.params.username;
  const id = req.params.id;
  console.log("Deleting a product for user: " + username);
  try {
    const result = await userProductService.deleteOne(username, id);
    res.status(200).json({data: result});
    console.log("User's product deleted");
  } catch(err) {
    res.status(400).json({data: err})
    console.log("Problem in deleting user's product ", err);
  }
}

// exports.delete = async (req, res)=>{
//   console.log("Deleting a product");
//   // const username = req.params.username;
//   // const id = req.params.id;
//   // console.log("Deleting a product for user: " + username);
//   // try {
//   //   const result = await userProductService.deleteOne(username, id);
//   //   res.status(200).json({data: result});
//   //   console.log("User's product deleted");
//   // } catch(err) {
//   //   res.status(400).json({data: err})
//   //   console.log("Problem in deleting user's product ", err);
//   // }
// }

