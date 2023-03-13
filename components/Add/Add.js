

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
import ViewCounts from '../Data/Data';
import { FlatList } from 'react-native-gesture-handler';

function Add (){

  const [url,seturl]=useState("")
  const [Selected ,setSelected]=useState(50)

const [pressed,setPressed]=useState(false)
const [arr , setArr] = useState([])

function onSubmit(){
  // const Obj=
  //   {
  //     id:1,
  //     link:url
  //   }
  
  if(url === ""){
setPressed(true)
  }
  else{
    // AsyncStorage.setItem('Links',JSON.stringify(Obj))
    // Alert.alert("Success","Your Link Added Successfully!")
    // navigation.goBack()
    AddTempProduct()
  }
}



const [loading,setLoading] = useState(false)

const AddTempProduct = (e) => {

  
for(let i = 0 ; i <= Selected;i++){

         setArr((prevItems) => [
          ...prevItems,
          {
            link: url,
            
          },
        ]);

    
    
setLoading(true)
    
    if(i === Selected){
setLoading(false)  
Alert.alert('Success','Now tap `Submit 2` Button')
}
    
    }
   
  
  };


const SetStorage = async ()  =>{
    try {
        await AsyncStorage.setItem('url', JSON.stringify(arr));
        const myArray = await AsyncStorage.getItem('url');
  if (myArray.length >= Selected-1 ) {
    Alert.alert('Congratulations !',"Urls are added successfully now go to `Stream Screen` ")
        navigation.goBack()
    console.log(JSON.parse(myArray));
  }
     
      } catch (error) {
Alert.alert('Ooops!','Something went wrong!')      }

}


const navigation = useNavigation()


function CountOption({item}){
  return(
    <Pressable 
    onPress={()=> setSelected(item.counsts)}
    
    style={[Styles.CountContainer,{backgroundColor:Selected == item.counsts ? Colors.PrimaryColor:"transparent"}]}>
   

    <Text style={{color:Selected == item.counsts ? Colors.BgColor:Colors.FontColorI}}>
      {item.counsts}
    </Text>

    </Pressable>
  )
}

  return (
    <SafeAreaView style={GlobalStyles.Container}>

<Header 
title="Add Link"
/>
<Text style={[Styles.TextColor,{marginTop:20}]}>Paste Link Below</Text>
<View style={[GlobalStyles.TextInput,{borderColor:url === "" && pressed === true ? Colors.danger:Colors.PrimaryColor}]}>
<TextInput 
style={{flex:1,color:Colors.PrimaryColor}}
placeholder="Please Paste Your Video Link Here"
placeholderTextColor={Colors.placeHolder}
value={url}
onChangeText={(e)=>seturl(e)}
/>
</View>


<Text
style={Styles.TextColor}
>
  Select the numbers of views per turn <Text style={{fontSize:12,color:Colors.deposit}}>
  {'( 50 recomended )'}</Text>
</Text>
<View style={Styles.ListContainer}>

<FlatList 

data={ViewCounts}
horizontal={true}
showsHorizontalScrollIndicator={false}
renderItem={CountOption}

/>

</View>



<Pressable
onPress={()=> 
  onSubmit()
  }
>

<SmallBtn 
title={"Submit 1"}
/>

</Pressable>




<Pressable
onPress={()=> 

{
if(arr.length < 1){
Alert.alert("Wrong!","First enter link and hit the `Submit 1` button, after that hit this `Submit 2`Button")  
}else{

  SetStorage()}
}

}
>

<SmallBtn 
title={"Submit 2"}
/>

</Pressable>



<Pressable

onPress={()=> {
  Alert.alert("Success","Links are deleted successfully !")
  AsyncStorage.clear()}}
>

<SmallBtn 
title={"Delete Links"}
/>
</Pressable>

<Text
style={Styles.TextColor}
>
  50 - 100 Views at one time are recomended if you have an average device + internet </Text>

  <Text
style={Styles.TextColor}
>
  300 - 1000 Views at one time are recomended if you have a great device + internet </Text>

  <Text
style={Styles.TextColor}
>
  Note: To use our app properly like an expert please watch our <Text style={{color:Colors.PrimaryColor,textDecorationLine:"underline"}}>guideline tutorial</Text> on youtube. </Text>
    </SafeAreaView>
  );
};



export default Add;


