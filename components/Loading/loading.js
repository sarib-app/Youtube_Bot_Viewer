import React, { useState } from 'react';
import {

  Text,
  Image,
  View,
ScrollView,
Pressable,
TouchableOpacity,
Dimensions

 
} from 'react-native';



import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';

import Colors from '../GlobalStyles/colors';
const WindowWidth = Dimensions.get('screen').width
  const WindowHeight = Dimensions.get('screen').height; 
function Loading() {




const navigation = useNavigation()






  return (
    <SafeAreaView style={{
      width: WindowWidth,
      height: WindowHeight,
      backgroundColor: Colors.BgColor,
      alignItems: "center",
      justifyContent:'center'

  }}>

<Text style={{color:Colors.FontColorI,fontSize:18,fontWeight:'bold'}}>Loading....</Text>


    </SafeAreaView>
  )
}
export default Loading;

