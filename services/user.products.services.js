const productEntity = require("../models/product.model").ProductEntity;
const userEntity = require('../models/user.model').UserEntity;
const userService = require('../services/user.services');
const productService = require('../services/product.services');
const userProductsEntity = require('../models/user.products.model').UserProductsEntity;
const dataSource = require("../connect").dataSource; //connection to mariaDB


async function createOne(data, username){    
  //insert product into Productst table
  const result1 = await dataSource 
    .getRepository(productEntity)
    .save(data)
    .then(() => console.log("Product has been created"))
    .catch((error) => console.log("Problem in creating product", error));

  const udata = await userService.findOne(username); //get user data  
  const pdata = await productService.findOne(data.product); //get product data

  console.log("userstId: " + udata.id + ", productstId: " + pdata.id)

  //insert user & product into relations table
  const errRelTable = false;
  const result = await dataSource
    .query("INSERT INTO userst_products_productst (userstId, productstId) VALUES(?, ?)", [udata.id, pdata.id])
    .then(() => console.log("User's product has been inserted"))
    .catch((error) => {
         errRelTable = true;
         console.log("Problem in updating user's products", error)        
      });

      if(errRelTable) {
        const delProduct = await productService.deleteOne(data.product); //delete product data
      }

  return result;
}


async function deleteOne (username, id) {   
  const udata = await userService.findOne(username); //get user data  
  //delete user & product from relation table
  const result = await dataSource
    .query("DELETE FROM userst_products_productst WHERE userstId =? AND  productstId = ?", [udata.id, id])   
    .then(() => console.log("User's product has been inserted"))
    .catch((error) => {
       errRelTable = true;
       console.log("Problem in updating user's products", error)        
    });
 return result;

}

module.exports = { createOne, deleteOne };
  //updateOne, //deleteOne 
