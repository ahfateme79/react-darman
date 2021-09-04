import { combineReducers } from "redux";
import Themeredux from "./theme";
import Loginreducer from "./login";
import Language from "./language";

const Allreducer = combineReducers({
  theme: Themeredux,
  logined: Loginreducer,
  lang: Language,
});
export default Allreducer;
