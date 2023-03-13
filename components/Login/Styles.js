import {
    StyleSheet,
   Dimensions
  } from 'react-native'
import { Divider } from 'react-native-paper';

import Colors from '../GlobalStyles/colors';
const WindowWidth = Dimensions.get('screen').width
  const WindowHeight = Dimensions.get('screen').height; 
  const Styles = StyleSheet.create({ 
SubContainer:{
    width:WindowWidth/1.2,
    height:WindowHeight/5,
    backgroundColor:Colors.bgIv,
    borderRadius:10,
    marginTop:20,
    justifyContent:"center",
    alignItems:"center"
    
},
TextColor:{
    color:Colors.FontColorI,
    fontSize:15,
    fontWeight:"bold",
    // fontStyle:"italic",
    alignSelf:'flex-start',
    marginLeft:30,margin:10
    
},
BigTextColor:{
  color:Colors.FontColorI,
  fontSize:20,
  fontWeight:"bold",
  fontStyle:"italic",
  alignSelf:'flex-start',
  marginLeft:30,marginTop:5
  
}



  })
  export default Styles