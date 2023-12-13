/* eslint-disable react-native/no-inline-styles */
import {Button, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RootStackScreenProps} from '../../navigaitons/type';
import Data from '../../data.json';
import {useAppDispatch, useAppSelector} from '../../app/hook';
import {resetState} from '../../features/bay-din/bayDingSlice';
type Props = RootStackScreenProps<'AnswerScreen'>;

const numList = ['၁', '၂', '၃', '၄', '၅', '၆', '၇', '၈', '၉', '၁၀'];

const AnswerScreen = ({navigation}: Props) => {
  const dispatch = useAppDispatch();

  const [answer, setAnswer] = useState<string>('');

  const {questionId, questionName, itemNumber} = useAppSelector(
    state => state.bayDin,
  );

  useEffect(() => {
    const answerId = numList.indexOf(itemNumber) + 1;
    const Answer = Data.answers.find(
      anw => anw.questionNo === questionId && anw.answerNo === answerId,
    );

    Answer && setAnswer(Answer?.answerResult);

    console.log(answer);
  }, [answer, itemNumber, questionId, setAnswer]);

  const handleReset = () => {
    dispatch(resetState());

    navigation.navigate('QuestionScreen');
  };

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Text style={{fontSize: 25, color: 'white'}}>{questionName}</Text>
      <Text style={{fontSize: 25, color: 'white'}}>{answer}</Text>
      <Button onPress={handleReset} title="go to reset" />
    </View>
  );
};

export default AnswerScreen;
