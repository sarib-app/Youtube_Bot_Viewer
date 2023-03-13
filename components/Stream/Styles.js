import {
    StyleSheet,
   Dimensions
  } from 'react-native'
import { Divider } from 'react-native-paper';

import Colors from '../GlobalStyles/colors';
const WindowWidth = Dimensions.get('window').width
  const WindowHeight = Dimensions.get('window').height; 
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
    fontSize:18,
    fontWeight:"bold",
    fontStyle:"italic",
    
},
ListCart:{
  width:WindowWidth/1.2,
  height:WindowHeight/4,
  backgroundColor:"white",
  marginTop:10
},
flastListContainer:{
  width:WindowWidth/1.2,
  height:WindowHeight/2,
  backgroundColor:"yellow"
}




  })
  export default Styles