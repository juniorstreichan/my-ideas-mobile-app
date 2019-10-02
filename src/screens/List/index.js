import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';
import IdeaCard from '../../components/IdeaCard';

export default function List({ navigation }) {
  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Text>List</Text>
      <IdeaCard />
      <Button
        label="HOME"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
}
