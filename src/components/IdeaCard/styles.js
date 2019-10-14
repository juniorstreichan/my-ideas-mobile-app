import styled from 'styled-components/native';
import { AppColors } from '../../config/theme';

export const Shape = styled.TouchableOpacity`
  background-color: ${AppColors.paper};
  padding: 15px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  margin-left: 15px;
  min-height: 130px;
  margin-bottom: 15px;
  border-color: #33333309;
  border-width: 1px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto';
`;

export const Description = styled.Text`
  margin-top: 10px;
`;

export const DeleteButton = styled.TouchableOpacity`
  margin: 0;
  justify-content: center;
  align-items: center;
  background-color: ${AppColors.danger};
  color: ${AppColors.light};
  flex: 1;
  height: 100%;
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  width: 20%;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 15px;
`;
