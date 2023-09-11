import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const initialState = {
  theme: "light_mode",
  popupInfo: {
    isOpen: "close",
    id: null,
    image: null,
  },
  posts: [],
  user: {
    username: "",
    email: "",
    id: null,
    isActivated: false,
  },
  isLoading: false,
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return {
        ...state,
        theme: action.payload,
      };
    }
    case "TOGGLE_POPUP": {
      return {
        ...state,
        popupInfo: {
          isOpen: action.payload.isOpen,
          id: action.payload.id,
          image: action.payload.image,
        },
      };
    }
    case "SET_POSTS": {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case "SET_USER": {
      return {
        ...state,
        user: action.payload,
      };
    }
    case "SET_ACTIVATION": {
      return {
        ...state,
        user: { ...state.user, isActivated: true },
      };
    }
    case "SET_LOADING": {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    }
    case "ADD_LIKE": {
      return {
        ...state,
        posts: state.posts.map((post: { id: number; likes?: number }) => {
          if (post.id === action.payload) {
            post = {
              ...post,
              likes: post.likes !== undefined ? post.likes + 1 : 1,
            };
            return post;
          }
          return post;
        }),
      };
    }
    case "REMOVE_LIKE": {
      return {
        ...state,
        posts: state.posts.map((post: { id: number; likes?: number }) => {
          if (post.id === action.payload) {
            post = {
              ...post,
              likes:
                post.likes !== undefined && post.likes > 0 ? post.likes - 1 : 0,
            };
            return post;
          }
          return post;
        }),
      };
    }
    case "ADD_FAVORITE": {
      return {
        ...state,
        posts: state.posts.map((post: { id: number; isFavorite?: boolean }) => {
          if (post.id === action.payload) {
            post = {
              ...post,
              isFavorite: post.isFavorite ? false : true,
            };
            return post;
          }
          return post;
        }),
      };
    }
    default:
      return state;
  }
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
