import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #efefef;
  padding: 50px 0;

  img {
    &:hover {
      cursor: ${props => props.focus && 'grab'};
      border: ${props => props.focus && '1px solid #f00'};
    }
  }

  ul {
    list-style: none;
  }
`;
export const Link = styled.li`
  display: inline;
  margin-right: 20px;
  font-size: 18px;

  &:hover {
    cursor: ${props => props.focus && 'grab'};
    border: ${props => props.focus && '1px solid #f00'};
  }
`;
