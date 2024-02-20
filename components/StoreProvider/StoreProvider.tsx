"use client";
import { PropsWithoutRef } from "react";
import { store } from "@/store";
import { Provider } from "react-redux";

export const StoreProvider = ({ children }: PropsWithoutRef<any>) => {
  return <Provider store={store}>{children}</Provider>;
};
