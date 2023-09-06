import React, { FC, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { TOGGLE_POPUP } from "src/actions/actions";

import { StyledPopupClose, StyledPopupContent } from "./styled";
import "./style.css";

interface IPopupPost {
  children: ReactNode;
}

const PopupPost: FC<IPopupPost> = ({ children }) => {
  const theme = useSelector(({ theme }) => theme);
  const dispatch = useDispatch();

  return (
    <div id="popup" className="popup">
      <div className="popup__body">
        <StyledPopupContent className="popup__content" theme={theme}>
          <StyledPopupClose
            className="popup__close"
            theme={theme}
            onClick={() =>
              dispatch(TOGGLE_POPUP({ isOpen: "close", id: null }))
            }
          >
            X
          </StyledPopupClose>
          {children}
          {/* <Post /> */}
        </StyledPopupContent>
      </div>
    </div>
  );
};

export default PopupPost;
