import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

export const initialState = {
    theme: 'light_mode',
};

const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
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