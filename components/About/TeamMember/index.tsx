import React from "react";
import Title from "antd/es/typography/Title";
import { Content } from "antd/es/layout/layout";
import { Card } from "antd";
import {
  InstagramOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import Image from "next/image";
type TeamProps = {
  image: string;
  tag: string;
  title: string;
  description: string;
};
function TeamMember({ image, tag, title, description }: TeamProps) {
  return (
    <Card
      className="team_member"
      style={{ width: 300 }}
      cover={<Image src={image} width={100} height={100} alt="profile" />}
      actions={[
        <InstagramOutlined key="instagram" />,
        <GithubOutlined key="github" />,
        <LinkedinOutlined key="linkedin" />,
      ]}
    >
      <span>{tag}</span>
      <Title level={4}>{title}</Title>
      <Content>{description}</Content>
    </Card>
  );
}

export default TeamMember;
