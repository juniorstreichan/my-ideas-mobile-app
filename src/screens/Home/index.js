//@flow
import React, { useCallback, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  KeyboardAvoidingView,
  Text,
  View,
} from 'react-native';
import { NavigationComponent } from 'react-navigation';
import logo from '../../assets/img/home.png';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { AppColors } from '../../config/theme';
import api from '../../services/api';
import { Container, Content, Label } from './styles';

export default function Home({ navigation }: NavigationComponent) {
  const [project, setProject] = useState('');
  const [isLoadding, setIsLoadding] = useState(false);

  const enterProject = useCallback(async () => {
    if (project) {
      try {
        setIsLoadding(true);
        const response = await api.get(`/projects?name=${project}`);
        if (response.status === 200) {
          navigation.navigate('List', { project: response.data });
        }
      } catch (error) {
        Alert.alert(error.message || 'Erro!');
      } finally {
        setIsLoadding(false);
      }
    }
  }, [navigation, project]);

  return (
    <KeyboardAvoidingView>
      <Container>
        <Image style={{ width: 250, height: 250 }} source={logo} />
        <Content style={{ height: '40%' }}>
          <Label>Nome do Projeto</Label>
          {isLoadding ? (
            <Text style={{ textAlign: 'center' }}>carregando {project}</Text>
          ) : (
            <Input maxLength={20} value={project} onChangeText={setProject} />
          )}
          <Button
            disabled={project === '' || isLoadding}
            label={
              isLoadding ? (
                <View>
                  <ActivityIndicator size="small" color={AppColors.light} />
                </View>
              ) : (
                'ENTRAR'
              )
            }
            onPress={() => {
              enterProject();
            }}
          />
        </Content>
      </Container>
    </KeyboardAvoidingView>
  );
}
