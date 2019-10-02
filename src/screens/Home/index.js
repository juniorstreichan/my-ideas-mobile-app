//@flow
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationComponent } from 'react-navigation';

export default function Home({ navigation }: NavigationComponent) {
  return (
    <View>
      <Text>Home</Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('List');
        }}>
        <Text>LIST</Text>
      </TouchableOpacity>
    </View>
  );
}
