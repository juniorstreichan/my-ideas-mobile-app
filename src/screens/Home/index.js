//@flow
import React, { useState, useCallback } from 'react';
import { View, Text, RefreshControl } from 'react-native';
import { NavigationComponent } from 'react-navigation';
import Button from '../../components/Button';
import Input from '../../components/Input';
import api from '../../services/api';

export default function Home({ navigation }: NavigationComponent) {
  const [project, setProject] = useState('');
  const [isLoadding, setIsLoadding] = useState(false);

  const enterProject = useCallback(async () => {
    if (project) {
      try {
        setIsLoadding(true);
        const response = await api.get(`/projects?name=${project}`);
        navigation.navigate('List', { project: response.data });
      } catch (error) {
        alert(error.message || 'Erro!');
      } finally {
        setIsLoadding(false);
      }
    }
  }, [navigation, project]);

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Text>Home</Text>
      {isLoadding && <Text>LOADDING...</Text>}
      <Input value={project} onChangeText={setProject} />
      <Button
        disabled={project === ''}
        label="ENTRAR"
        onPress={() => {
          enterProject();
        }}
      />
    </View>
  );
}
