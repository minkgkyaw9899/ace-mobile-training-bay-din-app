import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AuthScreensProps} from '../../navigaitons/type';

type Navigation = Props['navigation'];

type Props = AuthScreensProps<'LoginEmailScreen'>;

const LoginEmailScreen: FC<Props> = ({navigation, route}) => {
  const hookNavigation = useNavigation<Navigation>();

  const navigateToHome = () => hookNavigation.navigate('HomeScreen');
  return (
    <View>
      <Text>LoginEmailScreen</Text>
    </View>
  );
};

export default LoginEmailScreen;

const styles = StyleSheet.create({});
