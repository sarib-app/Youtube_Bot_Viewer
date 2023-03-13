

import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  Pressable,
  Alert
  
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import GlobalStyles from '../GlobalStyles/GlobalStyles';
import Header from '../GlobalStyles/Header';
import Styles from './Styles';
import StreamIcon from '../../assets/images/computer.png'
import addIcon from '../../assets/images/add.png'
import Colors from '../GlobalStyles/colors';
import BaseUrl from '../GlobalStyles/Url';
import EndPoints from '../GlobalStyles/EndPoints';
import getAsync from '../GlobalStyles/getAsync';

function Home ({onChangeState}){
  const AsyncData = getAsync()
const navigation = useNavigation()
const [loading , setLoading] = useState(false)

function onSubmit() {
  Alert.alert(
    'Confirmation',
    'Are you sure you want to Logout ?',
    [
      {
        text: 'No',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => onLogut(),
      },
    ],
    { cancelable: false }
  );
}

function onLogut(){

  setLoading(true)
  var formdata = new FormData();
  formdata.append("uid", AsyncData.user.id);
  
  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };
  
  fetch(`${BaseUrl}${EndPoints.LogOut}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      if(result.status === "200"){
        onChangeState()
        setLoading(false)

      }
    })
    .catch(error => {
      setLoading(false)
      console.log('error', error)});


}


  return (
    <SafeAreaView style={GlobalStyles.Container}>

<Header 
title="Home"
/>

<Pressable 

onPress={()=> navigation.navigate("Stream")}
style={Styles.SubContainer}>
<Image 
source={StreamIcon}
style={{width:100,height:100}}
/>
<Text style={Styles.TextColor }>Stream Now!</Text>
</Pressable>
<Pressable 

onPress={()=> navigation.navigate('Add')}
style={Styles.SubContainer}>
<Image 
source={addIcon}
style={{width:100,height:100}}
/>
<Text style={Styles.TextColor}>Add Link!</Text>
</Pressable>
<View style={Styles.SubContainer}>
 
<Image 
  style={{width:79,height:79}} 
  source={{uri:"https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/null/external-video-art-and-design-studio-xnimrodx-lineal-color-xnimrodx.png"}}
  />
<Text style={Styles.TextColor }>How to use!</Text>
</View>

{
  loading === true ?

<Text 

style={[Styles.TextColor,{color:Colors.send,marginTop:20,textDecorationLine:"underline"}] }>Loading.....</Text>
:
<Text 

onPress={()=>onSubmit()}
style={[Styles.TextColor,{color:Colors.danger,marginTop:20,textDecorationLine:"underline"}] }>Log Out!</Text>

}
    </SafeAreaView>
  );
};



export default Home;
