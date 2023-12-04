"use client";
import { store } from "../src/RTK/store";
import { Provider } from "react-redux";
import { ReactNode } from "react";

import Theme from "../src/Components/Theme";

export const ClientLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <Theme />
      <main className="container mx-auto">{children}</main>
    </Provider>
  );
};
