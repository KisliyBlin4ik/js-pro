import React, { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Loader from "../Loader/Loader";

import { StyledPageTemplate } from "src/styled";
import "./style.css";

interface IPageTemplate {
  title?: string;
  children: ReactNode;
}

const PageTemplate: FC<IPageTemplate> = ({ title, children }) => {
  const theme = useSelector(({ theme }) => theme);
  const isLoading = useSelector(({ isLoading }) => isLoading);
  const navigate = useNavigate();

  return (
    <StyledPageTemplate className="PageTemplate" theme={theme}>
      <>
        <a className="BackToHome" onClick={() => navigate("/blog")}>
          Back to home
        </a>
        <div className="titleWrapper">
          <h1>{title}</h1>
        </div>
        <div className="content">{isLoading ? <Loader /> : children}</div>
      </>
      <footer>
        <span>2022</span>
        <span>All right reserved</span>
      </footer>
    </StyledPageTemplate>
  );
};

export default PageTemplate;
