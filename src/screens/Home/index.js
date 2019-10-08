//@flow
import React, { useState, useCallback } from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import { NavigationComponent } from 'react-navigation';
import Button from '../../components/Button';
import Input from '../../components/Input';
import api from '../../services/api';
import logo from '../../assets/img/home.png';
import { AppColors } from '../../config/theme';
import { Container } from './styles';

export default function Home({ navigation }: NavigationComponent) {
  const [project, setProject] = useState('');
  const [isLoadding, setIsLoadding] = useState(false);

  const enterProject = useCallback(() => {
    if (project) {
      (async () => {
        try {
          setIsLoadding(true);
          const response = await api.get(`/projects?name=${project}`);
          navigation.navigate('List', { project: response.data });
        } catch (error) {
          alert(error.message || 'Erro!');
        } finally {
          setIsLoadding(false);
        }
      })();
    }
  }, [navigation, project]);

  return (
    <Container>
      <Image style={{ width: 200, height: 200 }} source={logo} />
      {isLoadding ? (
        <View>
          <ActivityIndicator size="large" color={AppColors.dark} />
        </View>
      ) : (
        <Input value={project} onChangeText={setProject} />
      )}
      <Button
        disabled={project === ''}
        label="ENTRAR"
        onPress={() => {
          enterProject();
        }}
      />
    </Container>
  );
}
