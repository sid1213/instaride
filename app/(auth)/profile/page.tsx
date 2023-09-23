"use client";
import React from "react";
import { Layout, Space } from "antd";
import Style from "./style.module.scss";
import ProfileSidebar from "@/components/Profile/ProfileSidebar";
import ProfileContent from "@/components/Profile/ProfileContent";
const { Sider, Content } = Layout;

function page() {
  return (
    <Layout hasSider className={Style.profile_container}>
      <Sider className="profile_sidebar_container">
        <ProfileSidebar />
      </Sider>
      <Content>
        <ProfileContent />
      </Content>
    </Layout>
  );
}

export default page;
