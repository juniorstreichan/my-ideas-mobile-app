import React, { useCallback } from 'react';
import { Image, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import trashImage from '../../assets/img/trash.png';
import {
  Description,
  Shape,
  Title,
  DeleteButton,
  ActionsContainer,
} from './styles';

export default function IdeaCard(props) {
  const renderOptions = useCallback((progress, dragX) => {
    return (
      <ActionsContainer>
        <DeleteButton>
          <Image source={trashImage} />
        </DeleteButton>
      </ActionsContainer>
    );
  }, []);

  return (
    <Swipeable renderRightActions={renderOptions}>
      <Shape activeOpacity={0.8}>
        <Title>PEOJETO X</Title>
        <Description>um projeto muito toppersson</Description>
      </Shape>
    </Swipeable>
  );
}
