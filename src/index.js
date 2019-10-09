import React from 'react';
import { YellowBox } from 'react-native';
import styled from 'styled-components/native';
import './config/StatusBar';
import { AppColors } from './config/theme';
import Routes from './routes';

YellowBox.ignoreWarnings(["Can't perform a React state"]);

const Container = styled.SafeAreaView`
  background: ${AppColors.light};
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;

const App = () => {
  return (
    <Container>
      <Routes />
    </Container>
  );
};

export default App;
