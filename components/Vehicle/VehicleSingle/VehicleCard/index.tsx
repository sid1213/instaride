"use client";
import { Carousel, Col, Row, Tag, Typography } from "antd";
import React from "react";
import Style from "./index.module.scss";
import Image from "next/image";
import FeatureCard from "@/components/Ui/FeatureCard";
import { Fa42Group } from "react-icons/fa6";

const { Text } = Typography;

const VehicleCard: React.FC = () => {
  return (
    <div className={Style.card}>
      <Row gutter={10} justify={"center"} align={"middle"}>
        <Col span={24}>
          <Tag color="green">5 Bikes available</Tag>
        </Col>
        <Col span={24}>
          <div className={Style.ImgMain}>
            <div>
              <Carousel
                arrows
                className={Style.carousel}
                dots={false}
                waitForAnimate={true}
                effect={"fade"}
              >
                <div>
                  <Image
                    src="/demo/Suzuki-Access-125.png"
                    width={400}
                    height={260}
                    objectFit="contain"
                    alt="demo"
                  />
                </div>
                <div>
                  <Image
                    src="/demo/Suzuki-Access-125.png"
                    width={400}
                    height={260}
                    objectFit="contain"
                    alt="demo"
                  />
                </div>
                <div>
                  <Image
                    src="/demo/Suzuki-Access-125.png"
                    width={400}
                    height={260}
                    objectFit="contain"
                    alt="demo"
                  />
                </div>
              </Carousel>
            </div>
            <p>*Images are for representation purposes only.</p>
          </div>
        </Col>
        <Col>
          <div>
            <Row gutter={25}>
              <Col>
                <FeatureCard
                  icon={<Fa42Group />}
                  title="kms 1000"
                  subTitle="6000 kms"
                />
              </Col>
              <Col>
                <FeatureCard
                  icon={<Fa42Group />}
                  title="kms 1000"
                  subTitle="6000 kms"
                />
              </Col>
              <Col>
                <FeatureCard
                  icon={<Fa42Group />}
                  title="kms 1000"
                  subTitle="6000 kms"
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default VehicleCard;
