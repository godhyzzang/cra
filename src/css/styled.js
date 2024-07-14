import styled from "styled-components";

export const SquareDiv = styled.div`
  background: #ffffff;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  border: 1px solid #000; /* 확인을 위해 추가 */
`;

export const TestButton = styled.button`
  background: red;
  color: white;
  padding: 10px;
  border: none;
  border-radius: ${(props) => `${props.radius}px`}; /* 동적 border-radius */
`;

// SquareCard 컴포넌트 정의
const SquareCardBase = ({ className, width, height, text }) => (
  <SquareDiv className={className} width={width} height={height}>
    {text}
  </SquareDiv>
);

// RadSquareCard 컴포넌트 정의
export const RadSquareCard = styled(SquareCardBase).attrs((props) => ({
  width: props.width,
  height: props.height,
}))`
  border-radius: ${(props) => `${props.radius}px`}; /* 동적 border-radius */
`;

export default SquareCardBase;
