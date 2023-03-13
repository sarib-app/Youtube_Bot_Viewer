import React,{useEffect,useState} from 'react';
import {
  StyleSheet,

} from 'react-native';




import Login from '../Login/Login';

import Home from '../Home/Home';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


import { useIsFocused } from '@react-navigation/native';
import Loading from '../Loading/loading';
const Router = () => {
  const [loggedin,setLoggedIn]=useState(2)
  const focused = useIsFocused()
const navigation = useNavigation()
  useEffect(() => {
    getAsyncData()
  }, []);


  async function getAsyncData () {
    const login = await AsyncStorage.getItem('login')
    if(login === "1"){
      setLoggedIn(1)
      
    }
    else{
        setLoggedIn(3)
    }
    
  }
  function onChangeState(){
    if(loggedin === 1){
        setLoggedIn(3)
    }
    else if(loggedin === 3){
        setLoggedIn(1)
    }
   

  }
//   function onNavigate(){
//     if(loggedin === 1){
//         setLoggedIn(3)
//     }
//     else if(loggedin === 3){
//         setLoggedIn(1)
//     }
//   }


if(loggedin === 1){
return <Home 
// onNavigate={onNavigate}
onChangeState={onChangeState}
/>
}

else if(loggedin === 2){
    return <Loading />
}
else{
    return <Login 
    // onNavigate={onNavigate}
    onChangeState={onChangeState}

    />
}



};



export default Router;
