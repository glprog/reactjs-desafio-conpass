import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const ButtonCreate = styled.button`
  font-size: 18px;
  color: #fff;
  background: #0dc3c8;
  padding: 10px 20px;
  border: 0;
  border-radius: 20px;
  margin-bottom: 50px;
`;

export const Content = styled.div`
  min-width: 400px;
  background: #fff;
  display: flex;
  flex-direction: column;
`;
export const TitleList = styled.div`
  font-size: 18px;
  background: #ebebeb;
  color: #a4a4a4;
  padding: 5px;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  margin: 10px 0;
  padding: 10px;
  border-bottom: 1px solid #efefef;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 16px;
  }
  button {
    border: 0;
    color: #6b9cde;
    font-size: 14px;
    text-decoration: underline;
  }
`;
