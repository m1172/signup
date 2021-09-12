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
