/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RootStackScreenProps} from '../navigaitons/type';
import Data from '../data.json';
type Props = RootStackScreenProps<'AnswerScreen'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AnswerScreen = ({navigation, route}: Props) => {
  const {questionId, itemNumber} = route.params;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [answer, setAnswer] = useState<string>('');

  useEffect(() => {
    const answerList = Data.answers;

    console.log(answerList);
  }, [questionId, itemNumber]);

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Text style={{fontSize: 25, color: 'white'}}>{answer}</Text>
    </View>
  );
};

export default AnswerScreen;
