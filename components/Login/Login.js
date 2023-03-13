

import React ,{useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  Alert
  
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import GlobalStyles from '../GlobalStyles/GlobalStyles';
import Header from '../GlobalStyles/Header';
import Styles from './Styles';
import Colors from '../GlobalStyles/colors';
import SmallBtn from '../GlobalStyles/SmallBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BaseUrl from '../GlobalStyles/Url';
import EndPoints from '../GlobalStyles/EndPoints';

function Login ({onChangeState}){

    const [email,setemail]=useState("")
    const [pressed,setPressed]=useState(false)
    const [password , setPassword] = useState("")
    const [loading,setLoading] = useState(false)
    
function onSubmit(){
  // const Obj=
  //   {
  //     id:1,
  //     link:email
  //   }
  if(email === "" || password === ""){
setPressed(true)
  }
  else{
    setLoading(true)
    Login()
  }
}



function Login(){


    var formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch(`${BaseUrl}${EndPoints.LoginApi}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        
        if(result.status === "200"){
            AsyncStorage.setItem('user',JSON.stringify(result.data))

            AsyncStorage.setItem('login',"1")
            onChangeState()

            setLoading(false)


        }
        else if(result.status === "401"){
            setLoading(false)

            Alert.alert("Notice",result.message)
        }
        console.log(result)})
      .catch(error => {
    setLoading(false)
        
        console.log('error', error)});


}




const navigation = useNavigation()
  return (
    <SafeAreaView style={GlobalStyles.Container}>

<Header 
title="Login "
/>

<Text style={Styles.BigTextColor}>Login</Text>
<Text style={{color:Colors.placeHolder,marginLeft:30,alignSelf:"flex-start",marginTop:5}}>To</Text>
<Text style={Styles.BigTextColor}>Continue</Text>


<Text style={[Styles.TextColor,{marginTop:40}]}>Enter email</Text>
<View style={[GlobalStyles.TextInput,{borderColor:email === "" && pressed === true ? Colors.danger:Colors.PrimaryColor}]}>
<TextInput 
style={{flex:1,color:Colors.PrimaryColor}}
placeholder="Enter Email" 
placeholderTextColor={Colors.placeHolder}
value={email}
onChangeText={(e)=>setemail(e)}
/>
</View>

<Text style={Styles.TextColor}>Enter Password</Text>
<View style={[GlobalStyles.TextInput,{borderColor:password === "" && pressed === true ? Colors.danger:Colors.PrimaryColor}]}>
<TextInput 
style={{flex:1,color:Colors.PrimaryColor}}
placeholder="Enter Password"
placeholderTextColor={Colors.placeHolder}
 
value={password}
onChangeText={(e)=>setPassword(e)}
/>
</View>


{
    loading === true ?

    
<Pressable
// onPress={()=> 
//     onSubmit()
// }
>

<SmallBtn 
title={"Loading..."}
/>

</Pressable>
:


<Pressable
onPress={()=> 
    onSubmit()
}
>

<SmallBtn 
title={"Login Now"}
/>

</Pressable>

}
<Text style={Styles.TextColor}>If you don't have any account please <Text
style={{color:Colors.PrimaryColor,textDecorationLine:'underline'}}
>click here</Text> to contact us for credentials.</Text>


<Text style={Styles.TextColor}>Text us on <Text
style={{color:Colors.PrimaryColor,textDecorationLine:'underline'}}
>instagram</Text> for any help or complain.</Text>

    </SafeAreaView>
  );
};



export default Login;


