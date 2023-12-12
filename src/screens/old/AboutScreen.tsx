import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackPramrsList} from '../../navigaitons/type';

type Props = NativeStackScreenProps<RootStackPramrsList, 'AboutScreen'>;

const AboutScreen = ({navigation, route}: Props) => {
  const data = route.params;
  return (
    <View>
      <Text style={{color: 'black', fontSize: 40}}>About Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={{color: 'black', fontSize: 20}}>Go to Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.canGoBack() && navigation.goBack()}>
        <Text style={{color: 'black', fontSize: 20}}>Go back</Text>
      </TouchableOpacity>
      <Text style={{color: 'black', fontSize: 20}}>{data?.age}</Text>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({});
