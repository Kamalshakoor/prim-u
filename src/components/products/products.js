/* eslint-disable react/no-array-index-key */
import Image from "next/image";
import React from "react";
import Carousel from "../carousel/carousel";
import { GlobalSection, GlobalSubtitle, GlobalTitle, SpanTitle } from "../global-components";
import {
  Angle,
  AngleContainer,
  CarrouselCard,
  ImageWrapper,
  InfoWrapper,
  Price,
  PriceContainer,
  ProductText,
  TitleWrapper,
} from "./products.styles";

const Products = ({ data }) => {
  const carouselRef = React.useRef();
  const [percent, setPercent] = React.useState(0);

  React.useEffect(() => {
    carouselRef.current.addEventListener("scroll", (e) => {
      setPercent(e.target.scrollLeft / (e.target.scrollWidth - e.target.offsetWidth));
    });
  }, []);

  React.useEffect(() => {
    if (carouselRef) {
      let isDown = false;
      let startX;
      let scrollLeft;

      carouselRef.current.addEventListener("mousedown", (e) => {
        isDown = true;
        startX = e.pageX - carouselRef.current.offsetLeft;
        scrollLeft = carouselRef.current.scrollLeft;
      });

      carouselRef.current.addEventListener("mouseleave", () => {
        isDown = false;
      });

      carouselRef.current.addEventListener("mouseup", () => {
        isDown = false;
      });

      carouselRef.current.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const scrollX = (x - startX) * 1;

        carouselRef.current.scrollLeft = scrollLeft - scrollX;
      });
    }
  }, []);

  return (
    <GlobalSection px={[0, 40, 40, 0]} pt={[20, 60, 80]}>
      <GlobalTitle
        fontSize={[34, 40, 54, 50]}
        lineHeight={["mediumTwo", "large"]}
        textAlign="center"
        px={[1]}
        mb={[40, 50, 54, 54, 80]}>
        <SpanTitle>beauty products</SpanTitle> for u{" "}
      </GlobalTitle>

      <Carousel>
        {data.map((products, index) => {
          return (
            <CarrouselCard mb={[60, 40]} key={index}>
              <ImageWrapper>
                <Image
                  src={`http:${products.fields.beautyProductImage.fields.file.url}`}
                  width={400}
                  height={220}
                  layout="intrinsic"
                  quality={100}
                />
              </ImageWrapper>

              <InfoWrapper>
                <TitleWrapper>
                  <GlobalSubtitle fontSize={[22]} lineHeight={["sub"]}>
                    {products.fields.beautyProducts}
                  </GlobalSubtitle>
                </TitleWrapper>

                <ProductText fontSize={[18]} lineHeight={["sub"]}>
                  {products.fields.description}
                </ProductText>

                <PriceContainer>
                  <Price fontSize={[18]} lineHeight={["sub"]}>
                    ₽ {products.fields.price}
                  </Price>
                </PriceContainer>
              </InfoWrapper>
            </CarrouselCard>
          );
        })}
      </Carousel>

      <AngleContainer>
        <Angle
          className="prev"
          onClick={() =>
            carouselRef.current.scrollBy({
              left: -100,
              behavior: "smooth",
            })
          }
          disabled={percent === 0}>
          <Image src="/LeftAngle.svg" width="20" height="20" intrinsic="true" />
        </Angle>
        <Angle
          className="next"
          onClick={() =>
            carouselRef.current.scrollBy({
              left: 100,
              behavior: "smooth",
            })
          }
          disabled={percent >= 1}>
          <Image src="/RightAngle.svg" width="20" height="20" intrinsic="true" />
        </Angle>
      </AngleContainer>
    </GlobalSection>
  );
};

export default Products;
