const EntitySchema = require("typeorm").EntitySchema;

const ProductEntity = new EntitySchema({
  name: "Productst",
  target: "Productst",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    product: {
      required: true,
      type: "varchar",
      unique: true,
      length: 10,
    },
    cost: {
      required: true,
      type: "int",
      width: 2,
    },
    description: {
      required: true,
      type: "varchar",
      length: "150",
    },
    quantity: {
      required: true,
      type: "int",
      width: 2,
    },
    createdAt: {
      type: "timestamp",
      default: new Date().toISOString().split("T")[0],
    }
  }
});

module.exports = { ProductEntity };
