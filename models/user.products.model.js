// const EntitySchema = require("typeorm").EntitySchema;

// const UserProductsEntity = new EntitySchema({
//   name: "Userst_Products",
//   target: "Userst_Products",
//   columns: {
//     id: {
//       primary: true,
//       type:"int",
//       generated: true
//     },
//     userstId: {   
//       type: "int",
//     },
//     productstId: {
//       type: "int",
//     }
//   },
//   relations: {
//     users: {    
//         target: "Userst",
//         type: "many-to-many",
//         inverseSide: "products",     
//         onDelete: "CASCADE",
//         onUpdate: "CASCADE"   
//     },
//     products: {    
//       target: "Productst",
//       type: "many-to-many",
//       inverseSide: "users",     
//       onDelete: "CASCADE",
//       onUpdate: "CASCADE"   
//     }
//   }
 
// });

// module.exports = { UserProductsEntity };
