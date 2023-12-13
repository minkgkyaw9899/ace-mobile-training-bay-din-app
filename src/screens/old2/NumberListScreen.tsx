/* eslint-disable react-native/no-inline-styles */
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from '../../navigaitons/type';
import Data from '../../data.json';
import {useAppDispatch} from '../../app/hook';
import {addItemNumber} from '../../features/bay-din/bayDingSlice';

interface Props extends RootStackScreenProps<'NumberListScreen'> {}

const NumberListScreen = ({navigation}: Props) => {
  // console.log(Data.numberList)

  const dispatch = useAppDispatch();

  const handleNumber = (item: string) => {
    // console.log(item);
    dispatch(addItemNumber(item));
    navigation.navigate('AnswerScreen');
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <FlatList
        data={Data.numberList}
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'black',
        }}
        style={{backgroundColor: 'red'}}
        numColumns={9}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => handleNumber(item)}
            style={{
              width: '8.5%',
              backgroundColor: 'blue',
              marginHorizontal: '1.2%',
              marginVertical: 10,
            }}>
            <Text style={{fontSize: 20, color: '#fff', textAlign: 'center'}}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NumberListScreen;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({});
