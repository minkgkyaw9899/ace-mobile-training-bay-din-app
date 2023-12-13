/* eslint-disable react-native/no-inline-styles */
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {FC, useDeferredValue, useEffect, useState} from 'react';
import Data from '@/app.json';
import {RootStackScreenProps} from 'navigations/type';
import {useNavigation} from '@react-navigation/native';
import {addQuestionData} from 'features/bay-din/bayDingSlice';
import {useAppDispatch} from 'app/hook';

type RenderItem = {
  item: {
    questionNo: number;
    questionName: string;
  };
};

type Props = RootStackScreenProps<'QuestionScreen'>;

type Navigation = Props['navigation'];

const QuestionListItem: FC<RenderItem> = ({item}) => {
  const dispatch = useAppDispatch();

  const navigation = useNavigation<Navigation>();
  const handleToNumberListScreen = () => {
    const {questionName, questionNo} = item;
    dispatch(addQuestionData({id: questionNo, name: questionName}));
    return navigation.navigate('NumberListScreen');
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
  const [filterQsList, setFilterQsList] = useState(Data.questions);

  const [value, setValue] = useState('');

  const query = useDeferredValue(value);

  useEffect(() => {
    if (query.trim() !== '') {
      const filteredList = Data.questions.filter(
        qs => qs.questionName.includes(query) && qs,
      );

      return setFilterQsList(filteredList);
    }
    setFilterQsList(Data.questions);
  }, [query]);

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <TextInput
        value={value}
        onChangeText={text => setValue(text)}
        placeholderTextColor={'white'}
        style={{color: '#fff'}}
        placeholder="Text something"
      />
      <FlatList
        data={filterQsList}
        keyExtractor={item => item.questionNo.toString()}
        renderItem={({item}) => <QuestionListItem item={item} />}
        // eslint-disable-next-line react/no-unstable-nested-components
        ItemSeparatorComponent={() => <View style={{marginVertical: 16}} />}
      />
    </View>
  );
};

export default QuestionScreen;
