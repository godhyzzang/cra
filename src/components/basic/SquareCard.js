/* 고려사항
- Width, height
- fixed :  bg color

매개변수 : textbox
*/

//header에도 쓰도록?

import React from "react";
import styled from "styled-components";
import { SquareDiv } from "../../css/styled";

const SquareCard = ({ width, height, text }) => {
  return (
    <>
      <SquareDiv width={width} height={height}>
        {/* json있으면 Json없으면 Text입력하도록 */}
        {text}
      </SquareDiv>
    </>
  );
};

// 스타일 확장 및 매개변수 전달
const RadSquareCard = styled(({ width, height, text }) => (
  <SquareCard width={width} height={height} text={text} />
))`
  border-radius: 30px;
`;

export { RadSquareCard };

export default SquareCard;
