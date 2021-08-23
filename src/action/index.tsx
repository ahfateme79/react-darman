export const Login = () => {
  return {
    type: "Login",
  };
};
export const Logout = () => {
  return {
    type: "logout",
  };
};
export const light = () => {
  return {
    type: "light",
    textcolor: "black",
    bgcolor: "white",
    btncolor: "red",
  };
};
export const dark = () => {
  return {
    type: "dark",
    textcolor: "white",
    bgcolor: "black",
    btncolor: "pink",
  };
};
