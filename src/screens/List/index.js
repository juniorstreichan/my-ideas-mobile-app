import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default function List({ navigation }) {
  return (
    <View>
      <Text>List</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text>HOME</Text>
      </TouchableOpacity>
    </View>
  );
}
