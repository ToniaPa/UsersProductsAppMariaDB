const productEntity = require("../models/product.model").ProductEntity;
const dataSource = require("../connect").dataSource; //connection to mariaDB

//
async function findAll() {
  const result = await dataSource
    .getRepository(productEntity)
    .createQueryBuilder()
    .select()
    // .from(productEntity) -> δίνει error
    .orderBy("product", "ASC")
    .getMany();

  return result;
}

async function findOne(product) {
  const result = await dataSource
    .getRepository(productEntity)
    .createQueryBuilder()
    .select()
    // .from(productEntity) -> δίνει error
    .where("product = :product", { product: product })
    .getOne();

  return result;
}

//
async function createOne(data) {
  //= insert στην ΒΔ, το id το δίνει η βάση
  console.log("createOne Product, data: ", data)
  if (data == null){
    console.log("data is null")
  }
  const result = await dataSource  
    .getRepository(productEntity)
    .createQueryBuilder()
    .insert()
    // .into(productEntity)
    .values(
      [
        {
          product: data.product,
          cost: data.cost,
          description: data.description,
          quantity: data.quantity,
        }
    ]
    )
    .execute()
    .catch((error) => console.log(error));

  return result;
}

async function updateOne(data) {
  console.log("data in updateOne: ", data)
  const result = await dataSource
    .getRepository(productEntity)
    .createQueryBuilder()
    .update()
    .set({
      cost: data.cost,
      description: data.description,
      quantity: data.quantity,
    })
    .where("product = :product", { product: data.product })
    .execute()
    .catch((error) => console.log(error));

  return result;
}

async function deleteOne(product) {
  const result = await dataSource
    .getRepository(productEntity)
    .createQueryBuilder()
    .delete()
    .from(productEntity)
    .where("product = :product", { product: product })
    .execute()
    .catch((error) => console.log(error));

  return result;
}

module.exports = { findAll, findOne, createOne, updateOne, deleteOne };
