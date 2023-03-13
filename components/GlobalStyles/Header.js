

import React from 'react';
import {
  SafeAreaView,
  Text
  
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import GlobalStyles from '../GlobalStyles/GlobalStyles';


function Header ({title}){
const navigation = useNavigation()
  return (
    <SafeAreaView style={GlobalStyles.Header}>
<Text
style={GlobalStyles.HeaderText}
>
{title}
</Text>
    </SafeAreaView>
  );
};



export default Header;
