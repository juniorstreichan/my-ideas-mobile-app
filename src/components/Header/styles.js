import styled from 'styled-components/native';
import { AppColors } from '../../config/theme';

export const Wrapper = styled.View.attrs({
  borderStyle: 'dashed',
})`
  height: 56px;
  flex-direction: row;
  align-items: center;
  background: ${AppColors.light};
  justify-content: space-around;
  margin-bottom: 20px;

  border-bottom-color: ${AppColors.dark}99;
  border-bottom-width: 3px;
  border-style: dashed;

  padding: 0;
`;

export const Title = styled.Text`
  text-align: center;
  font-family: 'Roboto';
  background: transparent;
  flex: 6;
  width: 100%;
  height: 100%;
  font-weight: bold;
  font-size: 24px;
  padding-top: 10px;
`;

export const BackButtom = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  background: transparent;
  justify-content: center;
  align-items: center;
`;
