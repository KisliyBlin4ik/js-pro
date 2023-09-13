import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import PageTemplate from "src/components/PageTemlate";
import Input from "src/components/Input/Input";
import { CREATE_USER, SIGN_IN } from "src/actions/actions";

import { StyledForm } from "src/styled";
import "./style.css";

const SignIn = () => {
  const dispatch: ThunkDispatch<any, {}, AnyAction> = useDispatch();

  const theme = useSelector(({ theme }) => theme);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

//   console.log(name);

  return (
    <PageTemplate title="Sign In">
      <StyledForm className="form" theme={theme}>
        <Input
          type="text"
          placeholder="Your email"
          value={email}
          label="Email"
          onChange={setEmail}
        />
        <Input
          type="password"
          placeholder="Your password"
          value={password}
          label="Password"
          onChange={setPassword}
        />
        <button
          className="signInBtn"
          onClick={() => dispatch(SIGN_IN(navigate, email, password))}
        >
          Sign In
        </button>
      </StyledForm>
    </PageTemplate>
  );
};

export default SignIn;
