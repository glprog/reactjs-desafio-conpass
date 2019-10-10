import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: -10px;
  top: -10px;

  transform: ${props =>
    props.data &&
    `translateX(${props.data.x}px)
    translateY(${props.data.y}px)`};
`;

export const Circle = styled.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  color: #fff;
  border: 1px solid #fff;
  background: rgb(238, 113, 109);
  box-shadow: 0px 0px 1px 1px rgb(237, 88, 80);
`;
