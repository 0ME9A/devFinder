"use client";
import { Provider } from "react-redux";
import { store } from "@/RTK/store";
import { ReactNode } from "react";
import useTheme from "@/hooks/useTheme";


export const ClientLayout = ({ children }: { children: ReactNode }) => {
  useTheme();

  return (
    <Provider store={store}>
      <main className="container mx-auto">{children}</main>
    </Provider>
  );
};
