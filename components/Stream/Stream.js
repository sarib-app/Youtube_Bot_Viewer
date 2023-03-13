

import React, {useEffect,useState,useRef,useCallback} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  FlatList,
  Alert
  
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import GlobalStyles from '../GlobalStyles/GlobalStyles';
import Header from '../GlobalStyles/Header';

import AsyncStorage from '@react-native-async-storage/async-storage';
import WebView from 'react-native-webview';
import Styles from './Styles';
import SmallBtn from '../GlobalStyles/SmallBtn';
function Stream (){
const [data,setData]=useState([])
const navigation = useNavigation()
const [loadVal,setLoadVal]=useState(80)

useEffect(()=>{
  GetStorage()


},[])

async function getAsyncData(){ 
  const AllLinks = await AsyncStorage.getItem('Links')
  const ParsedLinks = JSON.parse(AllLinks)
  if(ParsedLinks){
    setData(new Array(1000).fill(ParsedLinks))
  }
  console.log(ParsedLinks)

}

const GetStorage = async () => {
    
  try {
 
    const myArray = await AsyncStorage.getItem('url')
    const Parsed = JSON.parse(myArray)
    
    if (Parsed !== null) {
      // console.log(JSON.parse(myArray));
      setData(Parsed);
     
    }
  } catch (error) {
  Alert.alert('Empty')}
  }
















// const onMessage = (event) => {
//   console.log(event.nativeEvent.data);
// };

// const onWebViewLoad = () => {
//   webViewRef.current.injectJavaScript(`
//     console.log(document.getAttribute('ip-address'));
//   `);
// };







// const mockedIPJS = `
//       window.addEventListener('DOMContentLoaded', function() {
//         var ipElement = document.getElementById('ip-address');
//         if (ipElement) {
//           ipElement.innerHTML = '192.168.0.1'; // Replace with your mocked IP address
//         }
//       });
//   `;







const Buffer = require("buffer").Buffer;





const webViewRef = useRef(null);
function WebList({item , index}){


  const min = 1000;
  const max = 9999;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const randomNumberII = Math.floor(Math.random() * (max - min + 1)) + min;

const onLoadWebView = () => {
  webViewRef.current.injectJavaScript(mockLocationScript);

  // webViewRef.current.injectJavaScript(mockedIPJS);

};



const mockLocationScript = `navigator.geolocation.getCurrentPosition = function(success, error) {
  success({
    coords: {
      latitude: 37.77${randomNumber ? randomNumber : index}, // Replace with desired latitude
      longitude: -122.41${randomNumberII ? randomNumberII : index}, // Replace with desired longitude
      altitude: 0,
      accuracy: 0,
      altitudeAccuracy: 0,
      heading: 0,
      speed: 0
    }
  });
};
`;




// const proxyAddress = 'http://146.59.2.185';
// const proxyPort = 80;

// // Add the proxy server headers to HTTP requests
// const extraHeaders = {
//   // 'Proxy-Authorization': `Basic ${btoa('username:password')}`,
//   'Proxy-Connection': 'keep-alive',
//   'X-Forwarded-For': proxyAddress,
//   'X-Forwarded-Port': proxyPort,
//   'X-Target-URL': webViewRef.current?.getWebViewHandle()?.getUrl(),
// };





//     const proxyUrl = '146.59.152.52';
// const proxyConfig = { proxy: { host: proxyUrl, port: 59166 } }

//     const [uri, setUri] = useState(item.link);

//     const onShouldStartLoadWithRequest = (event) => {
//       const { url } = event;
//       // Modify the request URL here as needed
//       const modifiedUrl = `${url}?fakeIp=1.2.3.4`;
//       setUri(modifiedUrl);
//       return true;
//     };



// useEffect(() => {
//   const injectedJavaScript = `
//     var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
//     var targetUrl = 'https://whatismyipaddress.com/';
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', proxyUrl + targetUrl, true);
//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4) {
//         document.write(xhr.responseText);
//         document.close();
//       }
//     }
//     xhr.send();
//   `;
//   webViewRef.current.injectJavaScript(injectedJavaScript);
// }, []);






// useEffect(() => {
//   if (webViewRef.current) {
//     // Replace the current IP address with the mocked IP address
//     webViewRef.current.injectJavaScript(`
//       window.addEventListener('DOMContentLoaded', function() {
//         var ipElement = document.getElementById('ip-address');
//         if (ipElement) {
//           ipElement.innerHTML = '192.168.0.1'; // Replace with your mocked IP address
//         }
//       });
//     `);
//   }
// }, []);


// const onWebViewLoad = () => {
//   webViewRef.current.injectJavaScript(`
//     document.addEventListener("message", (event) => {
//       if (event.data === "ip-address") {
//         window.ReactNativeWebView.postMessage(document.getAttribute("ip-address"));
//       }
//     });
//   `);
//   webViewRef.current.postMessage("ip-address");
// };

// const onMessage = (event) => {
//   console.log("ll",event.nativeEvent.data);
// };







const YOUR_INJECTED_JAVASCRIPT = `
  Object.defineProperty(navigator, 'userAgent', { value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299' });
  Object.defineProperty(navigator, 'plugins', { value: { length: 1, 0: { name: 'Chrome PDF Plugin' } }});
  Object.defineProperty(navigator, 'languages', { value: ['en-US', 'en'] });
  Object.defineProperty(navigator, 'webdriver', { value: false });
  Object.defineProperty(navigator, 'platform', { value: 'Win32' });
  Object.defineProperty(window, 'chrome', { value: { runtime: {} }});
  Object.defineProperty(navigator, 'geolocation', { value: { getCurrentPosition: jest.fn(), watchPosition: jest.fn() } });
  Object.defineProperty(navigator, 'connection', { value: { effectiveType: '4g', rtt: 50 } });
  Object.defineProperty(navigator, 'permissions', { value: { query: jest.fn() } });
  Object.defineProperty(navigator, 'maxTouchPoints', { value: 1 });
  Object.defineProperty(navigator, 'hardwareConcurrency', { value: 4 });
  Object.defineProperty(navigator, 'doNotTrack', { value: null });
  Object.defineProperty(navigator, 'cookieEnabled', { value: true });
  Object.defineProperty(navigator, 'appVersion', { value: '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299' });
  Object.defineProperty(navigator, 'product', { value: 'Gecko' });
  Object.defineProperty(navigator, 'productSub', { value: '20030107' });
  Object.defineProperty(navigator, 'vendor', { value: 'Google Inc.' });
  Object.defineProperty(navigator, 'vendorSub', { value: '' });
  Object.defineProperty(window, 'location', { value: { href: 'https://getmycoordinates.netlify.app', ancestorOrigins: {}, protocol: 'https:', host: '201.20.88.5:3128', hostname: '201.20.88.5', port: '3128', pathname: '/', search: '', hash: '' } });
  Object.defineProperty(document, 'referrer', { get: () => '', set: () => {} });
`;


//How to add dimension in

return(
<View
style={Styles.ListCart}
>
  {
    randomNumber && randomNumberII ?
    <WebView 
    ref={webViewRef}
    // onMessage={onMessage}
    // onLoad={onLoadWebView}
    style={Styles.ListCart}
    source={{ uri : item.link}}
    // onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
    javaScriptEnabled={true}
    domStorageEnabled={true}
    startInLoadingState={true}
    injectedJavaScriptBeforeContentLoaded={mockLocationScript}
    /> :
    <Text>dsda</Text>
    
  }
</View>
);
}
const KeyExtractor=useCallback((item,index)=>index.toString(),[])

return (
    <View style={GlobalStyles.Container}>

<Header 
title="Stream YT videos"
/>
<Text style={Styles.TextColor}> Total Videos: {data.length}</Text>


{
  data.length >=2?
  
    <FlatList
    data={data}
    renderItem={WebList}
    keyExtractor={(item,index)=> index}
/>
    
    :
<Text style={[Styles.TextColor,{marginTop:300}]}>No Video To See Kindly Add Any Link</Text>


}

{/* {
  data.length >80 && loadVal < data.length &&

<Pressable
onPress={()=> 
  setLoadVal(loadVal+80)
}

>

<SmallBtn 
title={"Load More"}
/>
</Pressable>
} */}
{/* <View
style={{height:150,width:50}}
>

</View> */}



    </View>
  );
};



export default Stream;
  // <View style={{width:350,height:200,backgroundColor:'white',marginTop:20,alignItems:'center',justifyContent:"center"}} >

{/* <WebView
  source={{ uri: 'https://whatismyipaddress.com/' }}
  javaScriptEnabled={true}
  domStorageEnabled={true}
  startInLoadingState={true}
  style={{width:350,height:200}}
  useWebKit={true}
  incognito={true}
  sharedCookiesEnabled={true}
  setProxy={proxyConfig} // Set the proxy configuration
/> */}
  {/* </View> */}



  {/* <FlatList
      data={data}
      style={{flex:1}}
      renderItem={({item,index}) =>
      
      {
        if(index < 5 ){
          return(  
<WebList  item={item} index={index}/>
          )
        }
      }
}
keyExtractor={KeyExtractor}


/> */}