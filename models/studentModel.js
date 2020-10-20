const queryBuider = require("./../querybuilder");
module.exports = async () => {
  try {
    const existStudents = await queryBuider.schema.hasTable("estudantes");
    if (!existStudents) {
      await queryBuider.schema.createTable("estudantes", (table) => {
        table.increments("id"),
          table.string("nome").notNullable(),
          table.string("curso").notNullable();
      });
    } else {
      console.log("the students table already exists on the database");
    }
  } catch (error) {
    console.log("error creating students table");
  }
};
