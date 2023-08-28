import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
    count: 0,
    theme: 'light',
};

const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
        // case 'INCREMENT': {
        //     return {
        //         ...state,
        //         count: state.count + action.payload,
        //     }
        // }
        // case 'DECREMENT': {
        //     return {
        //         ...state,
        //         count: state.count - 1,
        //     }
        // }
        case 'TOGGLE_THEME_DARK': {
            return {
                ...state,
                theme: action.payload,
            }
        }
        case 'TOGGLE_THEME_LIHGT': {
            return {
                ...state,
                theme: action.payload,
            }
        }
        default:
            return state;
    }
};

const store = createStore(rootReducer, composeWithDevTools());

export default store;