const EntitySchema = require("typeorm").EntitySchema;

const AddressEntity = new EntitySchema({
  name: "Addressest",
  target: "Addressest",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    area: {
      required: true,
      type: "varchar",
      length: 20,
    },
    road: {
      required: true,
      type: "varchar",
      length: 150,
    },
    createdAt: {
      type: "timestamp",
      default: new Date().toISOString().split("T")[0],
    },
  },
  relations: {
    users: {
      target: "Userst",
      type: "one-to-one",
      joinColumn: {
        name: "userstId",
      },
      inverseSide: "address",    
      onDelete: "CASCADE", //οπωσδήποτε
      onUpdate: "CASCADE" //οπωσδήποτε
    },
  },
});

module.exports = { AddressEntity };
