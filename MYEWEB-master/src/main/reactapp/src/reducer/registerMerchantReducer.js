import merchantActions from '../ActionTypes/registerMerchantActionTypes';

const initialState = {
    fetchingMerchants : false,
    fetchedMerchants : false,
    registeringMerchant: false,
    merchantRegistered : []
};

const registerMerchantReducer = (state=initialState,action) => {
    switch(action.type){
        case merchantActions.REGISTERED_MERCHANTS:
        return {...state, merchantRegistered : action.text};
        default :
        return state;
    }
};

export default registerMerchantReducer;