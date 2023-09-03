import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

export const initialState = {
    theme: 'light_mode',
    popupInfo: {
        isOpen: 'close',
        id: null,
        image: null,
    },
};

const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
        // case 'TOGGLE_THEME_DARK': {
        //     return {
        //         ...state,
        //         theme: action.payload,
        //     }
        // }
        // case 'TOGGLE_THEME_LIHGT': {
        //     return {
        //         ...state,
        //         theme: action.payload,
        //     }
        // }
        case 'TOGGLE_THEME': {
            return {
                ...state,
                theme: action.payload,
            }
        }
        case 'TOGGLE_POPUP': {
            return {
                ...state,
                popupInfo: {
                    isOpen: action.payload.isOpen,
                    id: action.payload.id,
                    image: action.payload.image,
                }
            }
        }
        default:
            return state;
    }
};

const store = createStore(rootReducer, composeWithDevTools());

export default store;