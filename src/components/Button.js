import React from 'react';
import styled from 'styled-components/native';
import { AppColors } from '../config/theme';
import { TouchableOpacity, Image } from 'react-native';
import icon from '../assets/img/idea-icon.png';

type BtnProps =
  | {
      label: string,
      nextToTheSide: boolean,
    }
  | typeof TouchableOpacity;

const Wrapper = styled.TouchableOpacity`
  width: 250px;
  min-height: 50px;
  background: ${AppColors.dark};
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  border-radius: 50px;
  margin: 5px 3px;
  font-family: 'Roboto';
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  ${({ nextToTheSide }) => {
    if (nextToTheSide) {
      return `
              border-top-left-radius: 0px;
              border-bottom-left-radius: 0px;
              position: absolute;
              left:0;
              margin-left:0;
              bottom:10;
              width: 200px;
      `;
    }
  }}
`;

const LabelText = styled.Text`
  color: ${AppColors.light};
  font-weight: bold;
  font-size: 18px;
  font-family: 'Roboto';
`;

export default function Button({ label, ...props }: BtnProps) {
  const labelType = typeof label;
  return (
    <Wrapper {...props}>
      {labelType === 'string' ? <LabelText>{label}</LabelText> : label}
      {props.nextToTheSide && <Image source={icon} />}
    </Wrapper>
  );
}
