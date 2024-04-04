const userEntity = require("../models/user.model").UserEntity;
const dataSource = require("../connect").dataSource; //connection to mariaDB

//
async function findAll() {
  const result = await dataSource
    .getRepository(userEntity)
    .createQueryBuilder()
    .select()
    // .from(userEntity) -> δίνει error
    .leftJoinAndSelect("Userst.address", "Addressest")    
    .leftJoinAndSelect("Userst.telephones", "Telephonest")
    .leftJoinAndSelect("Userst.products", "Productst")
    .orderBy("username", "ASC")
    .getMany();    
    
  return result;
}

async function findOne(username) {
  const result = await dataSource
    .getRepository(userEntity)
    .createQueryBuilder()
    .select()
    // .from(userEntity) -> δίνει error
    .leftJoinAndSelect("Userst.address", "Addressest")    
    .leftJoinAndSelect("Userst.telephones", "Telephonest")
    .leftJoinAndSelect("Userst.products", "Productst")
    .where("username = :username", { username: username })
    .getOne();

  return result;
}

//
async function createOne(data) { 
  const result = await dataSource
    .getRepository(userEntity)
    .save(data)
    .then(() => console.log("User has been created"))
    .catch((error) => console.log("Problem in creating user ", error));

  return result;
}

async function updateOne(data) {
  //εδώ έρχονται nested τα data:
  //  { data: { name: 'Myname is user1', surname: 'USER1 SURNAME' ....} } --> πρόβλημα!

  const mydata = data.data; 
  const result = await dataSource
    .getRepository(userEntity)
    .createQueryBuilder()
    .update()      
    .set({
      username: mydata.username,
      password: mydata.password,
      name: mydata.name,
      surname: mydata.surname,
      email: mydata.email    
    })  
    .where("username = :username", { username: mydata.username })
    .execute()
    .then(() => console.log("User has been updated"))
    .catch((error) => console.log("Problem in updating user ", error));

  return result;
}

async function deleteOne(username) {
  console.log("from DeleteOne, username is: ", username)
  const result = await dataSource
  .getRepository(userEntity)
  .createQueryBuilder()
  .delete()
  // .from(userEntity)
  .where("username = :username", { username: username })
  .execute()
  .catch((error) => console.log(error));

 return result;
}

module.exports = { findAll, findOne, createOne, updateOne, deleteOne };
