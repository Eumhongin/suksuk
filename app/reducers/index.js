import {
  combineReducers
} from 'redux'
import navigationState from './navigation'
import client from './client'
import layouts from './layout'




const rootReducer = combineReducers({
  navigation: navigationState,
  client: client,
  layouts: layouts

})




export default rootReducer