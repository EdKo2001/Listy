import styled from "styled-components";

export const RightBlockContainer = styled.section`
  position: relative;
  padding: ${(props) =>
    props.last ? "8rem 0 10rem" : props.first ? "10rem 0 8rem" : "8rem 0 8rem"};

  @media(max-width: 768px) {
    padding: ${(props) =>
      props.last ? "5rem 0 6rem" : props.first ? "6rem 0 5rem" : "4rem 0"};

    .ant-col:last-child {
      order: -1;
      margin-bottom: 50px;
    }

    svg {
      width: 100%;
    }
  }  

  @media(max-width: 500px) {
    padding: ${(props) =>
      props.last ? "3rem 0 4rem" : props.first ? "4rem 0 3rem" : "2rem 0"};

    .ant-col:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Title = styled.h6``;

export const Content = styled.p`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled.div`
  position: relative;
  max-width: 540px;

  @media(max-width: 768px) {
    max-width: 100%;
  }

  @media only screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
`;
