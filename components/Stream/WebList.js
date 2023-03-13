

import React, {useEffect,useState,useRef,useCallback} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  FlatList
  
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import GlobalStyles from '../GlobalStyles/GlobalStyles';
import Header from '../GlobalStyles/Header';

import AsyncStorage from '@react-native-async-storage/async-storage';
import WebView from 'react-native-webview';
import Styles from './Styles';
import SmallBtn from '../GlobalStyles/SmallBtn';
function WebList({item , index}){

    const webViewRef = useRef(null);
  
  //   const min = 1000;
  //   const max = 9999;
  //   const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  //   const randomNumberII = Math.floor(Math.random() * (max - min + 1)) + min;
  
  // const onLoadWebView = () => {
  //   webViewRef.current.injectJavaScript(mockLocationScript);
  
  //   // webViewRef.current.injectJavaScript(mockedIPJS);
  
  // };
  
  
  
  // const mockLocationScript = `navigator.geolocation.getCurrentPosition = function(success, error) {
  //   success({
  //     coords: {
  //       latitude: 37.77${randomNumber ? randomNumber : index}, // Replace with desired latitude
  //       longitude: -122.41${randomNumberII ? randomNumberII : index}, // Replace with desired longitude
  //       altitude: 0,
  //       accuracy: 0,
  //       altitudeAccuracy: 0,
  //       heading: 0,
  //       speed: 0
  //     }
  //   });
  // };
  // `;
  
  
  
  
  const proxyAddress = 'http://146.59.2.185';
  const proxyPort = 80;
  
  // Add the proxy server headers to HTTP requests
  const extraHeaders = {
    'Proxy-Authorization': `Basic ${btoa('username:password')}`,
    'Proxy-Connection': 'keep-alive',
    'X-Forwarded-For': proxyAddress,
    'X-Forwarded-Port': proxyPort,
    'X-Target-URL': webViewRef.current?.getWebViewHandle()?.getUrl(),
  };
  
  
  
  
  
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
  
  return(
  <View
  style={Styles.ListCart}
  >
       {/* <WebView 
        ref={webViewRef}
        // onMessage={onMessage}
        onLoad={onLoadWebView}
        style={Styles.ListCart}
        source={{ uri : item.link}}
        // onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
      />  */}
       <WebView
        ref={webViewRef}
        style={Styles.ListCart}
  
        source={{ uri: 'https://whatismyipaddress.com' }}
        javaScriptEnabled={true}
        allowsInlineMediaPlayback={true}
        allowsFullscreenVideo={true}
        extraHeaders={extraHeaders}
      />
  </View>
  );
  }
  export default WebList