export const Loginn = () => {
  return {
    type: "Login",
  };
};
export const Logoutt = () => {
  return {
    type: "logout",
  };
};
export const light = () => {
  return {
    type: "light",
    bg: "pink",
    textclolor: "black",
  };
};
export const dark = () => {
  return {
    type: "dark",
    bg: "blue",
    textcolor: "white",
  };
};

// export const themelight = {
//   textcolor: "black",
//   bgcolor: "white",
//   btncolor: "pink",
// };

// export const themedark = {
//   textcolor: "white",
//   bgcolor: "black",
//   btncolor: "blue",
// };

export const english = () => {
  return {
    type: "en",
    sidebar: {
      Dashboard:'Dashboard',
      Home: "Home",
      Products: "products",
      Users: "Users",
      Setting: "Setting",
      Logout: "Logout",
    },
  };
};
export const farsi = () => {
  return {
    type: "fa",
    sidebar: {
      Dashboard:'داشبورد',
      Home: "خانه",
      Products: "محصولات",
      Users: "کاربران",
      Setting: "تنظیمات",
      Logout: "خروج از حساب",
    },
  };
};
