const EntitySchema = require("typeorm").EntitySchema;

const UserEntity = new EntitySchema({
  name: "Userst",
  target: "Userst",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    username: {
      required: true,
      type: "varchar",
      unique: true,
      length: 20,
    },
    password: {
      required: true,
      type: "varchar",
      length: 20,
    },
    name: { type: "varchar", length: 50},
    surname: { type: "varchar", length: 150 },
    email: {
      required: true,
      type: "varchar",
      length: 20,
      unique: true,
    },  
    createdAt: {
      type: "timestamp",
      default: new Date().toISOString().split("T")[0],
    }
    // ,
    // checks: [
    //     { expression: `LENGTH("password") > 5`}        
    //   ],
  }, //end of columns
  relations: { //users-address
    address: {
      target: "Addressest",
      type: "one-to-one",          
      inverseSide: "users",
      cascade: true
    },
    telephones: {
      target: "Telephonest",
      type: "one-to-many",      
      inverseSide: "users",
      cascade: true
    },
    products: {
      target: "Productst",
      type: "many-to-many",  
      joinTable: true,
      // joinTable: "userst_products_products",
      // joinColumn: "userstId",
      // inverseJoinColumn: "productstId",
      // inverseSide: "user",
      cascade: true,
      onDelete: "CASCADE", //οπωσδήποτε
      onUpdate: "CASCADE" //οπωσδήποτε
    }
  }
}); //end of EntitySchema

// console.log("User Entity Schema: ", UserEntity);

module.exports = { UserEntity };
