import React from "react";
import { useAppSelector } from "../../slices";

const About = () => {
  const users = useAppSelector((state) => state.test.users);

  return <div>{users[0].id}</div>;
};

export default About;
