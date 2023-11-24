"use client";
import React, { ReactNode } from "react";
import { store } from "../slices";
import { Layout } from "antd";
import { Provider } from "react-redux";
import Style from "../style/Layout/index.module.scss";
import Navbar from "@/components/Navbar";
import FooterComponent from "@/components/Footer";
import { SessionProvider } from "next-auth/react";
import useWindowDimensions from "utils/UseWindowDimensions";
const { Header, Footer, Content } = Layout;
interface ProviderType {
  children: ReactNode;
}

const Providers: React.FC<ProviderType> = ({ children }) => {
  const { width } = useWindowDimensions();

  return (
    <Provider store={store}>
      <SessionProvider>
        <Layout className={Style.layout}>
          <Header className={Style.header}>
            <Navbar />
          </Header>
          <Content className={Style.content}>{children}</Content>
          {width >= 992 && (
            <Footer className={Style.footer}>
              <FooterComponent />
            </Footer>
          )}
        </Layout>
      </SessionProvider>
    </Provider>
  );
};

export default Providers;
