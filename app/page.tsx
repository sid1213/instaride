"use client";
import { useAppSelector } from "../slices";

export default function Home() {
  const users = useAppSelector((state) => state.test.users);
  console.log(users[0].name);
  return <div>{users[0].name} </div>;
}
