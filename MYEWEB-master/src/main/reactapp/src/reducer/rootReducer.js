import { combineReducers } from 'redux';
import registerMerchantReducer from '../reducer/registerMerchantReducer';
import { reducer as formReducer } from 'redux-form';


const rootReducers = combineReducers({
     registerMerchants :  registerMerchantReducer,
     form: formReducer
})

export default rootReducers; 