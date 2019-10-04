import React from 'react';
import { Image, Modal, KeyboardAvoidingView } from 'react-native';
import checkImage from '../../assets/img/check.png';
import trashImage from '../../assets/img/trash.png';
import {
  ActionsContainer,
  Background,
  ButtonSave,
  ModalContent,
  ButtonDelete,
  EditTitle,
  EditDescription,
} from './styles';

const IdeaForm = () => {
  return (
    <Modal animationType="fade" transparent>
      <Background>
        <ModalContent>
          <EditTitle placeholder="Nome da sua ideia..." />
          <EditDescription
            scrollEnabled={true}
            returnKeyType="done"
            placeholder="Descrição..."
          />
        </ModalContent>
        <ActionsContainer>
          <ButtonSave>
            <Image source={checkImage} />
          </ButtonSave>
          <ButtonDelete>
            <Image source={trashImage} />
          </ButtonDelete>
        </ActionsContainer>
      </Background>
    </Modal>
  );
};

export default IdeaForm;
