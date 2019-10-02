import styled from 'styled-components/native';
import { AppColors } from '../config/theme';

const Input = styled.TextInput`
  width: 250px;
  background: #f0f1f1;
  border-bottom-width: 4px;
  border-bottom-color: ${AppColors.dark};
  color: ${AppColors.dark};
  padding: 2px 7px;
  font-size: 18px;
  margin: 5px 3px;
`;

export default Input;
