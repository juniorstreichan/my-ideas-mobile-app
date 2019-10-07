//@flow
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import IdeaCard from '../../components/IdeaCard';
import { FlatList } from 'react-native';
import IdeaForm from '../../components/IdeaForm';
import { NavigationComponent } from 'react-navigation';
import { Idea } from '../../types';
import Header from '../../components/Header';

const data = [
  {
    _id: '1230',
    title: 'PROJETO TOPZERA',
    description: 'um projeto muito topzera',
  },
];

export default function List({ navigation }: NavigationComponent) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedIdea, setSelectedIdea] = useState<Idea>(null);

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Header />
      <FlatList
        keyExtractor={item => '#' + Math.random()}
        data={data}
        renderItem={({ item }) => (
          <IdeaCard
            onDelete={() => alert('DELETE')}
            onTap={() => {
              setSelectedIdea(item);
              setOpenModal(true);
            }}
            idea={item}
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
      {openModal && (
        <IdeaForm
          onDelete={() => {
            setSelectedIdea(null);
            setOpenModal(false);
          }}
          onSave={() => {
            setSelectedIdea(null);
            setOpenModal(false);
          }}
          idea={selectedIdea}
        />
      )}
    </View>
  );
}
