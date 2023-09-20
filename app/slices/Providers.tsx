"use client";
import React, { ReactNode } from "react";
import { store } from "@/slices";
import { Layout } from "antd";
import { Provider } from "react-redux";
import Style from "@/style/Layout/index.module.scss";
import FooterComponent from "../../components/Footer/page";
const { Header, Footer, Content } = Layout;
interface ProviderType {
  children: ReactNode;
}
const Providers: React.FC<ProviderType> = ({ children }) => {
  return (
    <Provider store={store}>
      <Layout className={Style.layout}>
        <Header className={Style.container}>Header</Header>
        <Content className={Style.container}>{children}</Content>
        <Footer>
          <FooterComponent />
        </Footer>
      </Layout>
    </Provider>
  );
};

export default Providers;
