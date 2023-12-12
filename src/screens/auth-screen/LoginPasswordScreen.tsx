import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {AuthScreensProps} from '../../navigaitons/type';

type Props = AuthScreensProps<'LoginPasswordScreen'>;
const LoginPasswordScreen: FC<Props> = () => {
  return (
    <View>
      <Text>LoginPasswordScreen</Text>
    </View>
  );
};

export default LoginPasswordScreen;

const styles = StyleSheet.create({});
