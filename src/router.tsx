const routes = [
  {
    name: "index",
    path: "/",
    containerPath: "./components/main/main",
  },
  {
    name: "products",
    path: "/products",
    containerPath: "./containers/products/product",
  },
//   {
//     name: "carts",
//     path: "/carts",
//     containerPath: "../containers/carts/index",
//   },
  {
    name: "users",
    path: "/users",
    containerPath: "./containers/users/users",
  },
    {
    name: "setting",
    path: "/setting",
    containerPath: "./containers/setting/setting",
  },
  {
    name: "login",
    path: "/login",
    containerPath: "./containers/login/login",
  },
];
export default routes;
