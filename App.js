import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/tabs';
import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';


const App = ()=>{
  const requestUserPermission=async() =>{
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
    return enabled;
  }


  useEffect(() => {
    if(requestUserPermission()){
      messaging().getToken().then((fcmtoken)=>{
        console.log("FCM TOKEN -> ",fcmtoken);
      });

    }else console.log("Not Authorization status",authStatus);
  }, [])
  
  
  return (
   
    <NavigationContainer>
    <Tabs />
    </NavigationContainer>
    
    
  );
}

export default App;
