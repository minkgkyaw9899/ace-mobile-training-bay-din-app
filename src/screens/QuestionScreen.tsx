/* eslint-disable react-native/no-inline-styles */
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import Data from '../data.json';
import {RootStackScreenProps} from '../navigaitons/type';
import {useNavigation} from '@react-navigation/native';

type RenderItem = {
  item: {
    questionNo: number;
    questionName: string;
  };
};

type Props = RootStackScreenProps<'QuestionScreen'>;

type Navigation = Props['navigation'];

const QuestionListItem: FC<RenderItem> = ({item}) => {
  const navigation = useNavigation<Navigation>();
  const handleToNumberListScreen = () => {
    return navigation.navigate('NumberListScreen', {
      questionId: item.questionNo,
    });
  };
  return (
    <TouchableOpacity
      onPress={handleToNumberListScreen}
      style={{paddingVertical: 10, borderWidth: 1, borderColor: '#fff'}}>
      <Text style={{color: '#fff', fontSize: 18}}>{item.questionName}</Text>
    </TouchableOpacity>
  );
};

const QuestionScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <TextInput placeholder="Text something" />
      <FlatList
        data={Data.questions}
        keyExtractor={item => item.questionNo.toString()}
        renderItem={({item}) => <QuestionListItem item={item} />}
        // eslint-disable-next-line react/no-unstable-nested-components
        ItemSeparatorComponent={() => <View style={{marginVertical: 16}} />}
      />
    </View>
  );
};

export default QuestionScreen;
