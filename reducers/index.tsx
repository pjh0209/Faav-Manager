import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    index: (state: object, action) => {
        switch(action.type) {
            case HYDRATE:
                console.log('HYDRATE', action);
                return { ...state, ...action.payload };
            default:
                return state;
        }
    },
    // user,
    // post,
});

export default rootReducer;