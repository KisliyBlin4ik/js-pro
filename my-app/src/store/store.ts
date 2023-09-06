import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

export const initialState = {
    theme: 'light_mode',
    popupInfo: {
        isOpen: 'close',
        id: null,
        image: null,
    },
    posts: [],
};

const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
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
        case 'SET_POSTS': {
            return {
                ...state,
                posts: action.payload
            }
        }
        case 'ADD_LIKE': {
            return {
                ...state,
                posts: state.posts.map((post: {id: number, likes?: number}) => {
                    if (post.id === action.payload) {
                        // post.likes ? post.likes++ : post.likes = 1;
                        post = {...post, likes: post.likes !== undefined ? post.likes + 1 : 1}
                        return post
                    }
                    return post
                })
            }
        }
        case 'REMOVE_LIKE': {
            return {
                ...state,
                posts: state.posts.map((post: {id: number, likes?: number}) => {
                    if (post.id === action.payload) {
                        // post.likes ? post.likes-- : (post.likes = 0);
                        post = {...post, likes: post.likes !== undefined && post.likes > 0 ? post.likes - 1 : 0}
                        return post
                    }
                    return post
                })
            }
        }
        default:
            return state;
    }
};

const store = createStore(rootReducer, composeWithDevTools());

export default store;