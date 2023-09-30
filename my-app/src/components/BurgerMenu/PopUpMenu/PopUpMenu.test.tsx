"use client";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PopUpMenu from "./PopUpMenu";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router";
import { Provider } from "react-redux";
import store from "src/store/store";

describe("PopUpMenu component", () => {
  test("Renders with userName", () => {
    render(
      <Router>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<PopUpMenu userName="user" />}></Route>
          </Routes>
        </Provider>
      </Router>
    );
    const popUpMenu = screen.getByText("user");
    expect(popUpMenu).toBeInTheDocument();
  });
});
