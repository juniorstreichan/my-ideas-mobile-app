//@flow
import React, { useEffect, useState } from 'react';
import {
  BackHandler,
  FlatList,
  View,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { NavigationComponent } from 'react-navigation';
import Button from '../../components/Button';
import Header from '../../components/Header';
import IdeaCard from '../../components/IdeaCard';
import IdeaForm from '../../components/IdeaForm';
import { generateObjectId } from '../../tools/functions';
import { Idea, Project } from '../../types';
import { Wrapper, EmptyIdeas } from './styles';
import ProjectService from '../../services/ProjectService';
import { AppColors } from '../../config/theme';

export default function List({ navigation }: NavigationComponent) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedIdea, setSelectedIdea] = useState<Idea>(null);
  const [isLoadding, setIsLoadding] = useState(false);
  const [error, setError] = useState<Error | null>(null);
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

  useEffect(() => {
    if (error) {
      console.log('error', JSON.stringify(error));
      Alert.alert('Ops...', error.message || 'Ocorreu um problema');
      setError(null);
    }
    return () => {
      setError(null);
    };
  }, [error, setError]);

  const createIdea = async (idea: Idea) => {
    try {
      setIsLoadding(true);
      idea._id = generateObjectId();
      const created = await ProjectService.createOrUpdateIdea(
        project._id,
        idea,
      );
      if (created) {
        const ideas = [...project.ideas, idea];
        setProject({ ...project, ideas });
        setSelectedIdea(null);
        setOpenModal(false);
      }
    } catch (e) {
      setError(e);
    } finally {
      setIsLoadding(false);
    }
  };

  const updateIdea = async (idea: Idea) => {
    try {
      if (
        idea.title === selectedIdea.title &&
        idea.description === selectedIdea.description
      ) {
        setSelectedIdea(null);
        setOpenModal(false);
        return;
      }

      setIsLoadding(true);
      const created = await ProjectService.createOrUpdateIdea(
        project._id,
        idea,
      );
      if (created) {
        const ideas = project.ideas.map(i => {
          if (i._id === idea._id) {
            return idea;
          }
          return i;
        });
        setProject({ ...project, ideas });
        setSelectedIdea(null);
        setOpenModal(false);
      }
    } catch (e) {
      setError(e);
    } finally {
      setIsLoadding(false);
    }
  };

  const removeIdea = async (id?: string) => {
    try {
      setIsLoadding(true);
      if (id) {
        const deleted = await ProjectService.removeIdea(project._id, id);
        if (deleted) {
          const ideas = project.ideas.filter(i => i._id !== id);
          setProject({ ...project, ideas });
        }
      }

      setSelectedIdea(null);
      setOpenModal(false);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoadding(false);
    }
  };

  return (
    <Wrapper>
      <Header
        title={project.name}
        onBackAction={() => {
          navigation.navigate('Home');
        }}
      />
      {!selectedIdea && isLoadding && (
        <ActivityIndicator color={AppColors.dark} />
      )}
      <FlatList
        style={{ paddingTop: 10 }}
        ListFooterComponent={<View style={{ height: 100 }} />}
        keyExtractor={item => item._id}
        data={project.ideas}
        ListEmptyComponent={<EmptyIdeas />}
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
          isLoadding={isLoadding}
          onDelete={removeIdea}
          onSave={idea => {
            if (idea._id) {
              updateIdea(idea);
              return;
            }

            createIdea(idea);
          }}
          idea={selectedIdea}
        />
      )}
    </Wrapper>
  );
}
