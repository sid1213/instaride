"use client";
import React, { ReactNode } from "react";
import { store } from "@/slices";
import { Layout } from "antd";
import { Provider } from "react-redux";
const { Header, Footer, Content } = Layout;
interface ProviderType {
  children: ReactNode;
}
const Providers: React.FC<ProviderType> = ({ children }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Header>Header</Header>
        <Content>{children}</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Provider>
  );
};

export default Providers;
