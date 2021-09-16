import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 100vh;
  background-color: #eeeeee;
`;

export const Head = styled.div`
  background-color: #336cef;
  color: white;
  width: 350px;
  height: 150px;
  padding-bottom: 0px;
  border-radius: 40px 40px 0 0;
`;

export const Wrapper = styled.div`
  background-color: white;
  width: 350px;
  height: 400px;
  border-radius: 0 0 40px 40px;
`;

export const Body = styled.div`
  margin: 30px 0 0 40px;
`;
export const Input = styled.input`
  margin: 10px 0;
  font-size: 2px;
  border-radius: 10px;
  display: block;
  width: 90%;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
  background: #ecf0f3;
  padding: 10px;
  padding-left: 20px;
  height: 45px;
  font-size: 14px;
  border-radius: 50px;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
`;

export const Button = styled.button`
  margin-top: 20px;
  background: #336cef;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 900;
  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
  transition: 0.5s;
  display: block;
  width: 90%;
  padding: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
  :hover {
    box-shadow: none;
  }
`;
