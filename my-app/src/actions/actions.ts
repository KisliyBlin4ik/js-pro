import { IUser } from "src/components/Post/Post"

export const INCREMENT_CREATOR = (payload: number) => ({ type: 'INCREMENT', payload })
export const TOGGLE_THEME = (payload: string) => ({ type: 'TOGGLE_THEME', payload })
export const TOGGLE_POPUP = (payload: any) => ({ type: 'TOGGLE_POPUP', payload })
export const ADD_FAVORITE = (payload: any) => ({ type: 'ADD_FAVORITE', payload })

export const FETCH_POSTS = () => {
    return async (dispatch: any) => {
        dispatch({ type: 'SET_LOADING' });

        const fetchPost = async () => {
            const response = await fetch('https://studapi.teachmeskills.by/blog/posts/?lesson_num=2023&limit=17');
            const data = await response.json();
            const results = data.results
            dispatch({ type: 'SET_POSTS', payload: results })
            dispatch({type: 'SET_LOADING'})

            // .finally(() => {
            //     dispatch({type: 'SET_LOADING'})
            // })
        }
        fetchPost();
    }
}

export const CREATE_USER = (payload: IUser) => {
    return async (dispatch: any) => {
        dispatch({ type: 'SET_LOADING' });
        try {
            const response = await fetch('https://studapi.teachmeskills.by/auth/users', {method: 'POST', body: JSON.stringify(payload)});
            const data = await response.json();
            let user = data.result
            // dispatch({ type: 'SET_USER', payload: data })
            return user;
        } catch (err) {
            console.log(err);
        } finally {
            // dispatch({type: 'SET_LOADING'})
        }
    }
}

