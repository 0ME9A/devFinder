"use client";
import { Provider } from "react-redux";
import { store } from "@/RTK/store";
import { ReactNode } from "react";

import Theme from "@/components/Theme";

export const ClientLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <Theme />
      <main className="container mx-auto">{children}</main>
    </Provider>
  );
};
