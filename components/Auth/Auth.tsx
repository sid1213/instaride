"use client";
import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
interface ProviderType {
  children: ReactNode;
}
const Auth: React.FC<ProviderType> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Auth;
