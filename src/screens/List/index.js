//@flow
import React, { useEffect, useState } from 'react';
import { BackHandler, FlatList, View } from 'react-native';
import { NavigationComponent } from 'react-navigation';
import Button from '../../components/Button';
import Header from '../../components/Header';
import IdeaCard from '../../components/IdeaCard';
import IdeaForm from '../../components/IdeaForm';
import { generateObjectId } from '../../tools/functions';
import { Idea, Project } from '../../types';
import { Wrapper } from './styles';

export default function List({ navigation }: NavigationComponent) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedIdea, setSelectedIdea] = useState<Idea>(null);
  const [project, setProject] = useState<Project>(
    navigation.state.params.project,
  );

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        navigation.navigate('Home');
        return true;
      },
    );
    return () => {
      backHandler.remove();
    };
  }, [navigation]);

  const createIdea = (idea: Idea) => {
    idea._id = generateObjectId();
    const ideas = [...project.ideas, idea];
    setProject({ ...project, ideas });
    setSelectedIdea(null);
    setOpenModal(false);
  };
  const updateIdea = (idea: Idea) => {};
  const removeIdea = (id: string) => {
    const ideas = project.ideas.filter(i => i._id !== id);
    setProject({ ...project, ideas });
    setSelectedIdea(null);
    setOpenModal(false);
  };

  return (
    <Wrapper>
      <Header
        title={project.name}
        onBackAction={() => {
          navigation.navigate('Home');
        }}
      />
      <FlatList
        style={{ paddingTop: 10 }}
        ListFooterComponent={<View style={{ height: 100 }} />}
        keyExtractor={item => item._id}
        data={project.ideas}
        renderItem={({ item }) => (
          <IdeaCard
            onDelete={() => removeIdea(item._id)}
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
          onDelete={removeIdea}
          onSave={createIdea}
          idea={selectedIdea}
        />
      )}
    </Wrapper>
  );
}
