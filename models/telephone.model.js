const EntitySchema = require("typeorm").EntitySchema;

// const typePhone = Object.freeze({
//   HOME: "Home",
//   WORK: "Work",
//   MOBILE: "Mobile"
// });
const typePhone = ["Home", "Work", "Mobile"];

const TelephoneEntity = new EntitySchema({
  name: "Telephonest",
  target: "Telephonest",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    type: {
      // required: true,
      // type: typePhone,
      // default: typePhone.HOME
      require: true,
      type: "varchar",
    },
    number: {
      required: true,
      type: "varchar",
      length: 15,
    },
    createdAt: {
      type: "timestamp",
      default: new Date().toISOString().split("T")[0],
    },
  },
  relations: {  
    users: {
      target: "Userst",
      type: "many-to-one",
      joinColumn: {
        name: "userstId",
      },
      inverseSide: "telephones",      
      onDelete: "CASCADE", //οπωσδήποτε
      onUpdate: "CASCADE" //οπωσδήποτε
    },
  },
});

module.exports = { TelephoneEntity };
