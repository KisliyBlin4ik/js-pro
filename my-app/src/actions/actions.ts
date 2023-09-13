import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { IPost, IUser } from "src/components/Post/Post";

export const INCREMENT_CREATOR = (payload: number) => ({
  type: "INCREMENT",
  payload,
});
export const TOGGLE_THEME = (payload: string) => ({
  type: "TOGGLE_THEME",
  payload,
});
export const TOGGLE_POPUP = (payload: any) => ({
  type: "TOGGLE_POPUP",
  payload,
});
export const ADD_FAVORITE = (payload: any) => ({
  type: "ADD_FAVORITE",
  payload,
});

export const FETCH_POSTS = () => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });

    const fetchPost = async () => {
      const response = await fetch(
        "https://studapi.teachmeskills.by/blog/posts/?lesson_num=2023&limit=17"
      );
      const data = await response.json();
      const results = data.results;
      dispatch({ type: "SET_POSTS", payload: results });
      dispatch({ type: "SET_LOADING" });
    };
    fetchPost();
  };
};

export const FETCH_POST = (navigate: any, id: any) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });
    const fetchPost = async () => {
      const response = await fetch(
        "https://studapi.teachmeskills.by/blog/posts/?lesson_num=2023&limit=17"
      );
      const data = await response.json();
      const results = data.results;
      const post = results.filter((post: IPost) => post.id === id);
      dispatch({ type: "SET_POST", payload: post });
      navigate(`/blog/${id}`);
      dispatch({ type: "SET_LOADING" });
    };
    fetchPost();
  };
};

export const ACTIVATE_USER = (navigate: any, uid: string, token: string) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });

    const activateUser = async () => {
      const response = await fetch(
        "https://studapi.teachmeskills.by/auth/users/activation/",
        {
          method: "POST",
          body: JSON.stringify({ uid, token }),
          headers: { "Content-Type": "application/json" },
        }
      )
        .then(() => {
          dispatch({ type: "SET_ACTIVATION" });
          navigate("/success");
        })

        .finally(() => {
          dispatch({ type: "SET_LOADING" });
        });
    };
    activateUser();
  };
};
// http://localhost:3000/activate/NzAyNQ/bu4c5c-679ce67baf4e6180a1440c80c8582e69 для входа

export const CREATE_USER = (payload: IUser) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await fetch(
        "https://studapi.teachmeskills.by/auth/users/",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      let user = data.result;
      dispatch({ type: "SET_USER", payload: data });
      return user;
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: "SET_LOADING" });
    }
  };
};
