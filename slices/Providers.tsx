"use client";
import React, { ReactNode } from "react";
import { store } from "./index";

import { Provider } from "react-redux";

interface ProviderType {
  children: ReactNode;
}
const Providers: React.FC<ProviderType> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
