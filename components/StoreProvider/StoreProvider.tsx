"use client";
import { PropsWithoutRef } from "react";
import { store } from "@/store";
import { Provider } from "react-redux";

/**
 * StoreProvider component that wraps the children with Redux store provider.
 *
 * @param {PropsWithoutRef<any>} children - The child components to be wrapped
 */
export const StoreProvider = ({ children }: PropsWithoutRef<any>) => {
  return <Provider store={store}>{children}</Provider>;
};
