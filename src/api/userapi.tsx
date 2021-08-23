import Api from "./index";

export const getUser = () => Api("user", "GET", null);
export const addUser = (product: Object) => Api("user", "POST", product);
