import {
    StyleSheet,
   Dimensions
  } from 'react-native'
import { Divider } from 'react-native-paper';
import Colors from './colors';
const WindowWidth = Dimensions.get('screen').width
  const WindowHeight = Dimensions.get('screen').height; 
  const GlobalStyles = StyleSheet.create({ 
Container:{
    width:WindowWidth,
    height:WindowHeight,
    backgroundColor:Colors.BgColor,
    alignItems:'center'
},
Header:{
    width:WindowWidth,
    height:WindowHeight/15,
    backgroundColor:Colors.PrimaryColor,
    alignItems:'center',
    justifyContent:'center'
},
SmallBtn:{
 
  padding:20,
  backgroundColor:Colors.PrimaryColor,
  alignItems:'center',
  justifyContent:'center',
  paddingTop:10,
  paddingBottom:10,
  margin:10,
  borderRadius:10
},
HeaderText:{
    color:Colors.BgColor,
    fontSize:23,
    fontWeight:'bold'
},
BtnText:{
  color:Colors.BgColor,
  fontSize:18,
  fontWeight:'bold'
},
TextInput:{
  width:WindowWidth/1.2,
  height:WindowHeight/15,
  borderRadius:10,
  borderColor:Colors.PrimaryColor,
  borderWidth:1,
  backgroundColor:Colors.bgIII
}




  })
  export default GlobalStyles