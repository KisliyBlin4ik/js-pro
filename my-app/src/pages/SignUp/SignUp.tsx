import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import PageTemplate from "src/components/PageTemlate";
import Input from "src/components/Input/Input";
import { CREATE_USER } from "src/actions/actions";

import { StyledForm } from "src/styled";
import "./style.css";

const SignUp = () => {
  const dispatch: ThunkDispatch<any, {}, AnyAction> = useDispatch();

  const theme = useSelector(({ theme }) => theme);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  // console.log(name);

  return (
    <PageTemplate title="Sign Up">
      <StyledForm className="form" theme={theme}>
        <Input
          type="text"
          placeholder="Your name"
          value={name}
          label="Name"
          onChange={setName}
        />
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
        <Input
          type="password"
          placeholder="Confirm Your Password"
          value={confirmPassword}
          label="ConfirmPassword"
          onChange={setConfirmPassword}
        />
        <button
          className="signInBtn"
          onClick={() =>
            dispatch(
              CREATE_USER({ username: name, email, password, confirmPassword })
            )
          }
        >
          Sign Up
        </button>
      </StyledForm>
    </PageTemplate>
  );
};

export default SignUp;
