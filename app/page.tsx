import { Col, Row } from "antd";
import Style from "./page.module.scss";
import SearchCard from "@/components/Home/SearchCard";
import Image from "next/image";

const Home = () => {
  return (
    <section className={Style.container}>
      <Row justify={"space-between"} className={Style.main}>
        <Col className={Style.left} xs={24} sm={24} md={24} lg={12}>
          <SearchCard />
        </Col>
        <Col className={Style.right} order={1}>
          <Image
            src="/delhi.webp"
            alt="delhi"
            width={700}
            height={700}
            className={Style.img}
          />
        </Col>
      </Row>
    </section>
  );
};
export default Home;
