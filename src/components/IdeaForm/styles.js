import styled from 'styled-components/native';
import { AppColors } from '../../config/theme';

export const Background = styled.View`
  background: ${AppColors.dark}91;
  padding: 0;
  flex: 1;
  padding: 8%;
`;

export const ModalContent = styled.View`
  background: ${AppColors.paper};
  padding: 15px;
  border-radius: 3px;
  height: 90%;
`;

export const ActionsContainer = styled.View`
  padding: 13px 0;
  flex-direction: row;
  justify-content: space-between;
`;
const buttonStyles = `
    width: 50px;
    height: 50px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`;
export const ButtonSave = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  ${buttonStyles}

  background-color:${AppColors.success};
`;

export const ButtonDelete = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  ${buttonStyles}

  background-color:${AppColors.danger};
`;

export const EditTitle = styled.TextInput.attrs({
  autoCorrect: false,
  editable: true,
  maxLength: 20,
})`
  font-weight: bold;
  font-size: 24px;
`;

export const EditDescription = styled.TextInput.attrs({
  editable: true,
  multiline: true,
  maxLength: 255,
})`
  font-size: 14px;
  max-height: 90%;
  color: ${AppColors.dark};
  border-color: ${AppColors.dark}09;
  border-width: 1px;
`;
