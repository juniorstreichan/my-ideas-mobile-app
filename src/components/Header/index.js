//@flow
import React from 'react';
import { Image } from 'react-native';
import { Wrapper, Title, BackButtom } from './styles';
import backImage from '../../assets/img/back.png';

type InnerProps = {
  title: string,
  onBackAction: Function,
};

export default function Header({ title, onBackAction }: InnerProps) {
  return (
    <Wrapper>
      <BackButtom onPress={onBackAction}>
        <Image source={backImage} />
      </BackButtom>
      <Title>{title}</Title>
    </Wrapper>
  );
}
