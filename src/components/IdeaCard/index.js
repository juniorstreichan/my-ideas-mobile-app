import React, { useCallback } from 'react';
import { Image, ActivityIndicator } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Idea } from '../../types';
import trashImage from '../../assets/img/trash.png';
import {
  Description,
  Shape,
  Title,
  DeleteButton,
  ActionsContainer,
} from './styles';
import { AppColors } from '../../config/theme';

type InnerProps = {
  idea: Idea,
  onDelete: Function,
  onTap: Function,
  isLoadding: bollean,
};

export default function IdeaCard({
  idea,
  onDelete,
  onTap,
  isLoadding,
}: InnerProps) {
  const renderOptions = useCallback(
    (progress, dragX) => {
      return (
        <ActionsContainer>
          <DeleteButton onPress={onDelete}>
            {isLoadding ? (
              <ActivityIndicator color={AppColors.light} />
            ) : (
              <Image source={trashImage} />
            )}
          </DeleteButton>
        </ActionsContainer>
      );
    },
    [isLoadding, onDelete],
  );

  return (
    <Swipeable renderRightActions={renderOptions}>
      <Shape delayPressIn={0.1} activeOpacity={0.8} onPress={onTap}>
        <Title>{idea.title}</Title>
        <Description>{idea.description}</Description>
      </Shape>
    </Swipeable>
  );
}
