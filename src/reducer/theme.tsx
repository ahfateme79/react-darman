const Themeredux=(state=false,action:any)=>{
    switch (action.type) {
    case "light":
      return state =true;
    case "dark":
      return state=false;
    default:
      return state;
  }
}
export default Themeredux