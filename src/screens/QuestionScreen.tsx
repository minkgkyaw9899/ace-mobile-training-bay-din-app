/* eslint-disable react-native/no-inline-styles */
import {FlatList, RefreshControl, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {FC, useDeferredValue, useEffect, useState} from 'react';
import {RootStackScreenProps} from 'navigations/type';
import {useNavigation} from '@react-navigation/native';
import {addQuestionData} from 'features/bay-din/bayDingSlice';
import {useAppDispatch} from 'app/hook';
import axios, {AxiosResponse} from 'axios';
import {
  QueryFunctionContext,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query';

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

type Question = {
  questionNo: number;
  questionName: string;
};

const QuestionScreen = () => {


  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filterQsList, setFilterQsList] = useState([]);
  const [questionList, setQuestionList] = useState<Question[]>([])

  const [value, setValue] = useState('');

  const query = useDeferredValue(value);

  const {data, hasNextPage, fetchNextPage, isFetchingNextPage, refetch, isFetching} = useInfiniteQuery({
    queryKey: ['questions'],
    queryFn:  async ({ pageParam }) => {
    const res: AxiosResponse<Question[]> = await axios.get(`http://10.1.40.98:3000/questions?_page=${pageParam}&_limit=10`)
      let currentPage = pageParam
      let lastPage = 7;
      let nextPage = currentPage < lastPage ? currentPage + 1 : null;
      return {
        resData: res.data,
        nextPage
    }
  },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  })

  useEffect(() => {
    if (data) {
      console.log(data)
      data.pages.map(res => setQuestionList(prev => ([...prev, ...res.resData])))
    }
  }, [data])

  
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
        // onRefresh={refetch}
        // refreshing={isFetching}
        // refreshControl={<RefreshControl refreshing={isFetching} colors={['red', 'blue', 'green', 'white']} onRefresh={refetch} />}
        ListFooterComponent={() => isFetchingNextPage && <View style={{paddingBottom: 100}}><Text style={{color: 'green', fontSize: 40}}>Fetching next page ...</Text></View>}
        onEndReached={() => hasNextPage && fetchNextPage()}
        data={questionList}
        // keyExtractor={item => item.questionNo.toString()}
        renderItem={({item}) => <QuestionListItem item={item} />}
        // eslint-disable-next-line react/no-unstable-nested-components
        ItemSeparatorComponent={() => <View style={{marginVertical: 16}} />}
      />
    </View>
  );
};

export default QuestionScreen;
