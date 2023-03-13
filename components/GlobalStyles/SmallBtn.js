

import React from 'react';
import {
  SafeAreaView,
  Text
  
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import GlobalStyles from '../GlobalStyles/GlobalStyles';


function SmallBtn ({title}){
const navigation = useNavigation()
  return (
    <SafeAreaView style={GlobalStyles.SmallBtn}>
<Text
style={GlobalStyles.BtnText}
>
{title}
</Text>
    </SafeAreaView>
  );
};



export default SmallBtn;
