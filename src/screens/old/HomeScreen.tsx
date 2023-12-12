import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  RootStackPramrsList,
  RootStackScreenProps,
} from '../../navigaitons/type';

type ScreenProps = RootStackScreenProps<'HomeScreen'>;

const HomeScreen: FC<ScreenProps> = ({navigation, route}) => {
  return (
    <View>
      <Text style={{color: 'black', fontSize: 40}}>HomeScreen</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('AuthScreen', {
            screen: 'LoginEmailScreen',
          })
        }>
        <Text style={{color: 'black', fontSize: 20}}>
          Go to Login Email Screen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.canGoBack() && navigation.goBack()}>
        <Text style={{color: 'black', fontSize: 20}}>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
