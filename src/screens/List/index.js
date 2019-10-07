//@flow
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { NavigationComponent } from 'react-navigation';
import Button from '../../components/Button';
import Header from '../../components/Header';
import IdeaCard from '../../components/IdeaCard';
import IdeaForm from '../../components/IdeaForm';
import { Idea } from '../../types';

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
      <Header
        title="PROJETO MASSA"
        onBackAction={() => {
          navigation.navigate('Home');
        }}
      />
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
          setOpenModal(true);
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
