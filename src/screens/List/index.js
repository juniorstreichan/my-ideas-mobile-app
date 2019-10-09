//@flow
import React, { useState, useMemo } from 'react';
import { FlatList, View } from 'react-native';
import { NavigationComponent } from 'react-navigation';
import Button from '../../components/Button';
import Header from '../../components/Header';
import IdeaCard from '../../components/IdeaCard';
import IdeaForm from '../../components/IdeaForm';
import { Idea, Project } from '../../types';

export default function List({ navigation }: NavigationComponent) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedIdea, setSelectedIdea] = useState<Idea>(null);
  // console.log('navigation.state', navigation.state);
  const project: Project = useMemo(() => navigation.state.params.project, [
    navigation.state.params.project,
  ]);

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Header
        title={project.name}
        onBackAction={() => {
          navigation.navigate('Home');
        }}
      />
      <FlatList
        keyExtractor={item => item._id}
        data={project.ideas}
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
