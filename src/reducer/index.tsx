import {combineReducers} from 'redux'
import Themeredux from './theme'
import Loginreducer from './login'


const Allreducer=combineReducers({
    theme:Themeredux,
    logined:Loginreducer,
})
export default Allreducer