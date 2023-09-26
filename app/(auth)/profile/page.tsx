"use client";
import React, { useState } from "react";
import { Layout } from "antd";
import Style from "./style.module.scss";
import ProfileSidebar from "@/components/Profile/ProfileSidebar";
import ProfileContent from "@/components/Profile/ProfileContent";
const { Sider, Content } = Layout;

function page() {
  const [active, setActive] = useState<string>("profile");

  return (
    <Layout hasSider className={Style.profile_container}>
      <Sider className="profile_sidebar_container">
        <ProfileSidebar setActive={setActive} />
      </Sider>
      <Content className="profile_content_container">
        <ProfileContent active={active} />
      </Content>
    </Layout>
  );
}

export default page;
