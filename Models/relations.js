import User from "./User.js";
import Role from "./Role.js";
import Toy from "./Toy.js";
import Category from "./Category.js"

Category.hasMany(Toy,{
  foreignKey:"categoryId",
});

Toy.belongsTo(Category,{
  foreignKey:"categoryId",
});

Role.hasMany(User, {
  foreignKey: "roleId",
});
User.belongsTo(Role, {
  foreignKey: "roleId",
});

export { User, Role, Toy, Category};