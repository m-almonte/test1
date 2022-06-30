/* eslint-disable import/export */
import React from "react";
import { render } from "@testing-library/react";

const customRender = (ui: React.ReactElement) =>
  render(ui, {
    wrapper: ({ children }) => children,
  });

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { customRender as render };
