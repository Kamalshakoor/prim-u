import styled from "styled-components";
import { fontSize, lineHeight, space, width } from "styled-system";

export const CarrouselCard = styled.div`
  background: ${({ theme }) => theme.colors.gray};
  width: 520px;
  height: 240px;
  border-radius: 20px;
  overflow: hidden;
  display: inline-block;
  position: relative;
  ${lineHeight};
  ${space};
  ${fontSize};
  ${width};
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 434px;
    height: 268px;
  }
  @media only screen and (max-width: 500px) {
    width: 355px;
    height: 288px;
  }
`;
export const TitleReviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${lineHeight};
  ${space};
  ${fontSize};
  ${width};
`;
export const ReviewText = styled.p`
  font-family: ${({ theme }) => theme.fonts.roboto};
  text-align: left;
  ${lineHeight};
  ${space};
  ${fontSize};
  ${width};
`;
export const Stars = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 20px;
  right: 30px;
`;
