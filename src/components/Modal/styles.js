import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  margin-top: 20px;
  left: calc(-43%);

  background: #fff;
  border-radius: 4px;
  padding: 15px 5px;
  box-shadow: 0 -0 20px 2px rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -15px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 15px solid rgba(255, 255, 255, 1);
  }
`;

export const Content = styled.div`
  display: flex;
  min-width: 200px;

  form {
    display: flex;
    flex-direction: column;

    flex: 1;

    input {
      color: #000;
      border: 0;
      border-radius: 4px;
      height: 24px;
      padding: 0 15px;
      background: rgba(0, 0, 0, 0.1);
      margin: 0 0 10px;

      &::placeholder {
        color: #484848;
      }
    }

    button {
      margin: 5px 0 0;
      height: 26px;
      background: #0fc0c5;
      color: #fff;
      font-size: 13px;
      letter-spacing: 2px;

      border: 0;
      border-radius: 4px;
      transition: background 0.2s;

      &:hover {
        background: #078286;
      }
    }
  }
`;
