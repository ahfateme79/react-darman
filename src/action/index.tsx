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
    bodybg:'white'
  };
};
export const dark = () => {
  return {
    type: "dark",
    bg: "#2f3e46",
    textcolor: "white",
    bodybg:"#354f52"
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
      Dashboard: "Dashboard",
      Home: "Home",
      Products: "products",
      Users: "Users",
      Setting: "Setting",
      Logout: "Logout",
    },
    heading: ["id", "title", "price"],
  };
};
export const farsi = () => {
  return {
    type: "fa",
    sidebar: {
      Dashboard: "داشبورد",
      Home: "خانه",
      Products: "محصولات",
      Users: "کاربران",
      Setting: "تنظیمات",
      Logout: "خروج از حساب",
    },
    heading: ["شماره", "عنوان", "فیمت"],
    id: [
      {
        1: "۱",
        2: "۲",
        3: "۳",
        4: "۴",
        5: "۵",
        6: "۶",
        7: "۷",
        8: "۸",
        9: "۹",
        10: "۱۰",
        11: "۱۱",
        12: "۱۲",
        13: "۱۳",
        14: "۱۴",
        15: "۱۵",
        16: "۱۶",
        17: "۱۷",
        18: "۱۸",
        19: "۱۹",
        20: "۲۰",
      },
    ],
    title: [
      {
        Mens: "مردانه",
        Womens: "زنانه",
        Casual: "گاه کاه",
        TShirts: "تیشرت",
      },
    ],
  };
};
