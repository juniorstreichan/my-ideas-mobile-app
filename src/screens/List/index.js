import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import IdeaCard from '../../components/IdeaCard';
import { FlatList } from 'react-native';

export default function List({ navigation }) {
  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Text>List</Text>
      <FlatList
        keyExtractor={item => '#' + Math.random()}
        data={[{}]}
        renderItem={() => <IdeaCard />}
      />
      <Button
        nextToTheSide
        label="EUREKA"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
}
