"use client";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { PostMid } from "./Post";
import { Provider } from "react-redux";
import store from "src/store/store";
import { BrowserRouter as Router } from "react-router-dom";
import { MemoryRouter, Routes, Route } from "react-router";
import React from "react";

describe("PostMid component", () => {
  test("Renders with title", () => {
    render(
      <Router>
        <Provider store={store}>
          <Routes>
            <Route
              path="/"
              element={
                <PostMid
                  title="testTitle"
                  date="date"
                  id={13}
                  image="image"
                  likes={10}
                />
              }
            ></Route>
          </Routes>
        </Provider>
      </Router>
    );
    const postMid = screen.getByText(/testTitle/i);
    expect(postMid).toBeInTheDocument();
  });
});


