"use client";
import React, { useState } from "react";
import { Layout } from "antd";
import Style from "./style.module.scss";
import ProfileSidebar from "@/components/Profile/ProfileSidebar";
import ProfileContent from "@/components/Profile/ProfileContent";
import classNames from "classnames";
const { Sider, Content } = Layout;

function page() {
  const [active, setActive] = useState<string>("profile");
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <Layout hasSider className={Style.profile_container}>
      <Sider
        className={classNames(
          "profile_sidebar_container",
          visible ? Style.none : ""
        )}
      >
        <ProfileSidebar
          setActive={setActive}
          setVisible={setVisible}
          visible={visible}
        />
      </Sider>
      <Content
        className={classNames(
          "profile_content_container",
          !visible ? Style.none : ""
        )}
      >
        <ProfileContent active={active} setVisible={setVisible} />
      </Content>
    </Layout>
  );
}

export default page;
