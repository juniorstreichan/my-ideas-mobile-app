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
import ProjectService from '../../services/ProjectService';
import { Container, Content, Label } from './styles';

export default function Home({ navigation }: NavigationComponent) {
  const [projectName, setProject] = useState('');
  const [isLoadding, setIsLoadding] = useState(false);

  const enterProject = useCallback(async () => {
    if (projectName) {
      try {
        setIsLoadding(true);
        const project = await ProjectService.getProject(projectName);

        navigation.navigate('List', { project });
      } catch (error) {
        Alert.alert(error.message || 'Erro!');
      } finally {
        setIsLoadding(false);
      }
    }
  }, [navigation, projectName]);

  return (
    <KeyboardAvoidingView>
      <Container>
        <Image source={logo} />
        <Content>
          <Label>Nome do Projeto</Label>
          {isLoadding ? (
            <Text style={{ textAlign: 'center' }}>
              carregando {projectName}
            </Text>
          ) : (
            <Input
              maxLength={20}
              value={projectName}
              onChangeText={setProject}
            />
          )}
          <Button
            disabled={projectName === '' || isLoadding}
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
