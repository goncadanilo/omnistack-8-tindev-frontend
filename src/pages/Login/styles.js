import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 40px 30px;
    margin: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

    input {
      margin-top: 20px;
      border: 1px solid #ddd;
      border-radius: 4px;
      height: 48px;
      padding: 0 20px;
      font-size: 16px;
      color: #666;

      ::placeholder {
        color: #999;
      }
    }

    button {
      margin-top: 10px;
      border: 0;
      border-radius: 4px;
      height: 48px;
      font-size: 16px;
      background: #df4723;
      color: #fff;
      cursor: pointer;
    }
  }
`;
