import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import instance from "src/axiosConfig";
import { IPost, IUser } from "src/components/Post/Post";

export const INCREMENT_CREATOR = (payload: number) => ({
  type: "INCREMENT",
  payload,
});
export const TOGGLE_THEME = (payload: string) => ({
  type: "TOGGLE_THEME",
  payload,
});
export const TOGGLE_OPEN = (payload: string) => ({
  type: "TOGGLE_OPEN",
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
export const SET_SEARCH_POSTS = (payload: any) => ({
  type: "SET_SEARCH_POSTS",
  payload,
});

export const FETCH_POSTS = () => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });

    try {
      instance.get("blog/posts/?lesson_num=2023&limit=100").then((data) => {
        const results = data.data.results;
        dispatch({ type: "SET_POSTS", payload: results });
      });
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: "SET_LOADING" });
    }
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

export const SIGN_IN = (navigate: any, email: string, password: string) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });

    const signIn = async () => {
      try {
        const response = await fetch(
          "https://studapi.teachmeskills.by/auth/jwt/create/",
          {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
          }
        )
          .then((data) => data.json())
          .then((data) => {
            console.log(data);
            if (data.access) {
              navigate("/blog");
              localStorage.setItem("access", data.access);
              localStorage.setItem("refresh", data.refresh);
            } else {
              console.log("Неверные логин или пароль");
            }
          });
      } catch (err) {
        console.log(err);
      } finally {
        dispatch({ type: "SET_LOADING" });
      }
    };
    signIn();
  };
};

export const SIGN_IN_USER = (token: string) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });

    const signInUser = async () => {
      try {
        let data = await fetch(
          "https://studapi.teachmeskills.by/auth/users/me/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        ).then((data) => data.json());
        dispatch({ type: "SET_SIGN_IN", payload: data });
        // console.log(data);
      } catch (err) {
        console.log(err);
      } finally {
        dispatch({ type: "SET_LOADING" });
      }
    };
    signInUser();
  };
};

export const FETCH_MY_POSTS = (token: string) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const data = await fetch("https://studapi.teachmeskills.by/blog/posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((data) => data.json())
        .then((data) => data.results);
      dispatch({ type: "SET_MY_POSTS", payload: data });
      // console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: "SET_LOADING" });
    }
  };
};

interface IPosts {
  title: string;
  lesson_num: number;
  images: any;
  description: string;
  text: string;
}

export const CREATE_POST = ({
  title,
  lesson_num,
  images,
  description,
  text,
}: IPosts) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("lesson", lesson_num.toString());
  formData.append("image", images[0].file);
  formData.append("description", description);
  formData.append("text", text);

  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });

    try {
      // const data = await fetch("https://studapi.teachmeskills.by/api/schema/swagger-ui/#/blog/blog_posts_create", {
      instance.post("/blog/posts/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: "SET_LOADING" });
    }
  };
};

export const SORT_POSTS = (sortState: string) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });

    try {
      instance
        .get(`blog/posts/?offset=50&limit=850&ordering=${sortState}`)
        .then((data) => {
          const results = data.data.results;
          dispatch({ type: "SET_POSTS", payload: results });
        });
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: "SET_LOADING" });
    }
  };
};
