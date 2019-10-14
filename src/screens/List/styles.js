import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  width: 100%;
`;

export const EmptyIdeas = styled.Text.attrs({
  children: 'Este projeto está sem ideias :(',
})`
  text-align: center;
  font-size: 20px;
  color: #999;
  font-weight: bold;
  justify-content: center;
  /* background-color: pink; */
  height: 100%;
`;
