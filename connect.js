const typeorm = require('typeorm'); 

const UserEntity = require('./models/user.model').UserEntity;
const ProductEntity = require('./models/product.model').ProductEntity;
const AddressEntity = require('./models/address.model').AddressEntity;
const TelephoneEntity = require('./models/telephone.model').TelephoneEntity;

const dataSource = new typeorm.DataSource({
  type: "mariadb",
  host: process.env.HOST,  
  port: 3306, 
  username: process.env.DBUSER, 
  password: process.env.PASSWORD, 
  database: process.env.DATABASE, 
  synchronize: true,
  entities: [UserEntity, AddressEntity, TelephoneEntity, ProductEntity] 
});

dataSource
    .initialize()
    .then( function() {
      console.log("Connected to database")
      // console.log("entities: ", UserEntity)
      // console.log("entities: ", ProductEntity)
      // console.log("entities: ", AddressEntity)
      // console.log("entities: ", TelephoneEntity)
    })
    .catch( function(error) {
      console.log("Problem in connecting to database, error: ", error)
    })

module.exports = { dataSource }