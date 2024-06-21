import User from "./User.js";
import Role from "./Role.js";
import Toy from "./Toy.js";
import Category from "./Category.js";
import Carrito from "./Carrito.js";
import CarritoItem from "./CarritoItem.js";
import Pedido from "./Pedido.js";


Toy.hasMany(CarritoItem,{
  foreignKey:"toyId",
})
CarritoItem.belongsTo(Toy,{
  foreignKey:"toyId",
})
Carrito.hasOne(Pedido, {
  foreignKey: "carritoId",
});

Pedido.belongsTo(Carrito, {
  foreignKey: "carritoId",
});
User.hasMany(Carrito,{
  foreignKey:"userId",
})

Carrito.belongsTo(User,{
  foreignKey:"userId",
})
Carrito.hasMany(CarritoItem,{
foreignKey:"carritoId",
});
CarritoItem.belongsTo(Carrito,{
  foreignKey:"carritoId",
})

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

export { User, Role, Toy, Category, Carrito, CarritoItem, Pedido};