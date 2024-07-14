// import styled from "styled-components";

// export const SquareDiv = styled.div`
//   background: #ffffff;
//   width: ${(props) => `${props.width}px`};
//   height: ${(props) => `${props.height}px`};
//   border: 1px solid #000; /* 확인을 위해 추가 */
// `;

// export const TestButton = styled.button`
//   background: red;
//   color: white;
//   padding: 10px;
//   border: none;
//   border-radius: ${(props) => `${props.radius}px`}; /* 동적 border-radius */
// `;

// // SquareCard 컴포넌트 정의
// const SquareCardBase = ({ className, width, height, text }) => (
//   <SquareDiv className={className} width={width} height={height}>
//     {text}
//   </SquareDiv>
// );

// // RadSquareCard 컴포넌트 정의
// export const RadSquareCard = styled(SquareCardBase).attrs((props) => ({
//   width: props.width,
//   height: props.height,
// }))`
//   border-radius: ${(props) => `${props.radius}px`}; /* 동적 border-radius */
// `;

// export default SquareCardBase;

import styled from "styled-components";

//???????
export const Container = styled.div`
  padding: 20px;
`;

export const Section = styled.section`
  margin-bottom: 32px;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const MentorsGrid = styled.div`
  display: flex;
  gap: 20px;
  /* flex-wrap: wrap; */
`;
export const MentorsWrap = styled(MentorsGrid)`
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  width: 328px;
  height: 140px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const Name = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Role = styled.p`
  color: #666;
  margin-bottom: 10px;
`;

export const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export const StatItem = styled.div`
  font-size: 14px;
  color: #333;
`;

export const FollowButton = styled.button`
  background: #007bff;
  border: none;
  color: white;
  padding: 8px 12px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background: #0056b3;
  }
`;
