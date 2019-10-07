import React from 'react';
import styled from 'styled-components/native';
import env from 'react-native-config';
import { Text } from 'react-native';
import './config/StatusBar';
import { AppColors } from './config/theme';
import Routes from './routes';

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
      <Text>api: {env.API_URL}</Text>
    </Container>
  );
};

export default App;
