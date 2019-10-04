import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import IdeaCard from '../../components/IdeaCard';
import { FlatList } from 'react-native';
import IdeaForm from '../../components/IdeaForm';

export default function List({ navigation }) {
  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Text>List</Text>
      <FlatList
        keyExtractor={item => '#' + Math.random()}
        data={[{}, {}]}
        renderItem={() => (
          <IdeaCard
            onDelete={() => alert('DELETE')}
            onTap={() => alert('EDIT')}
            idea={{
              title: 'PROJETO TOPZERA',
              description: 'um projeto muito topzera',
            }}
          />
        )}
      />
      <Button
        nextToTheSide
        label="EUREKA"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <IdeaForm />
    </View>
  );
}
