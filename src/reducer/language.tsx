const Language = (state = false, action: any) => {
  switch (action.type) {
    case "en":
      return (state = false);
    case "fa":
      return (state = true);
    default:
      return state;
  }
};
export default Language;
