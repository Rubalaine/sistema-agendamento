const queryBuider = require("./../querybuilder");
module.exports = async () => {
  try {
    const existSchedules = await queryBuider.schema.hasTable("schedules");
    if (!existSchedules) {
      await queryBuider.schema.createTable("schedules", (table) => {
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
