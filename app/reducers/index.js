import {
  combineReducers
} from 'redux'
import navigationState from './navigation'



const rootReducer = combineReducers({
  navigationState: navigationState,

})




export default rootReducer