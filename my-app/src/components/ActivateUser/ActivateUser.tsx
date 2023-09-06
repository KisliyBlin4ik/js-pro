import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { ACTIVATE_USER } from "src/actions/actions";

const ActivateUser = () => {
  const navigate = useNavigate();
  const { uid, token } = useParams();
  const dispatch: ThunkDispatch<any, {}, AnyAction> = useDispatch();

  useEffect(() => {
    if (uid && token) {
      dispatch(ACTIVATE_USER(navigate, uid, token));
    }
  }, [uid, token]);

  return <div>ActivateUser</div>;
};

export default ActivateUser;