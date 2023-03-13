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
    fontStyle:"italic",
    alignSelf:'flex-start',
    marginLeft:30,
    margin:10
    
},
CountContainer:{
    borderRadius:8,
    borderWidth:1,
    borderColor:Colors.PrimaryColor,
    // width:WindowWidth/1.2,
    height:WindowHeight/14,
    // backgroundColor:'yellow',
padding:20, 
alignItems:'center',
justifyContent:"center",
marginLeft:4   
},
ListContainer:{
  height:WindowHeight/12,
  // margin:10
}





  })
  export default Styles