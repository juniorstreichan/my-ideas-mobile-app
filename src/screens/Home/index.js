//@flow
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationComponent } from 'react-navigation';
import Button from '../../components/Button';
import Input from '../../components/Input';

export default function Home({ navigation }: NavigationComponent) {
  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Text>Home</Text>

      <Button
        nextToTheSide
        label="LIST"
        onPress={() => {
          navigation.navigate('List');
        }}
      />
      <Button
        label="LIST"
        onPress={() => {
          navigation.navigate('List');
        }}
      />

      <Input />
    </View>
  );
}
