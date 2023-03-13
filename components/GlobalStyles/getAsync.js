import React,{useState,useEffect,useCallback,useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,

  
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const getAsync =()=>{
    useEffect(()=>{
        getAsyncData()
        },[])
      
      const [Asyndata,setAsyndata]=useState({
        token:"",
        user:{}
      })
      
      
      
      async function getAsyncData () {
        const user = await AsyncStorage.getItem('user')
        // const token = await AsyncStorage.getItem('token')
        let userParsed=JSON.parse(user) 
        if(userParsed){
      
      setAsyndata({
        // token:token,
        user:userParsed
      })
      
      
        }
      }
      return Asyndata
      
}
export default getAsync