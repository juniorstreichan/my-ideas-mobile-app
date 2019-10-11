// @flow
import React, { useState, useEffect } from 'react';
import { Image, Modal } from 'react-native';
import checkImage from '../../assets/img/check.png';
import trashImage from '../../assets/img/trash.png';
import { Idea } from '../../types';
import {
  ActionsContainer,
  Background,
  ButtonSave,
  ModalContent,
  ButtonDelete,
  EditTitle,
  EditDescription,
} from './styles';

type InnerProps = {
  onDelete: Function,
  onSave: (newIdea: Idea) => void,
  idea?: Idea,
};

export default function IdeaForm({ onDelete, onSave, idea }: InnerProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (idea) {
      setTitle(idea.title);
      setDescription(idea.description);
    }
  }, [idea]);

  return (
    <Modal animationType="fade" transparent>
      <Background>
        <ModalContent>
          <EditTitle
            placeholder="Nome da sua ideia..."
            value={title}
            onChangeText={setTitle}
          />
          <EditDescription
            scrollEnabled={true}
            returnKeyType="done"
            placeholder="Descrição..."
            value={description}
            onChangeText={setDescription}
          />
        </ModalContent>
        <ActionsContainer>
          <ButtonSave onPress={() => onSave({ ...idea, title, description })}>
            <Image source={checkImage} />
          </ButtonSave>
          <ButtonDelete onPress={() => onDelete(idea._id)}>
            <Image source={trashImage} />
          </ButtonDelete>
        </ActionsContainer>
      </Background>
    </Modal>
  );
}
