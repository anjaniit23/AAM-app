import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/tabs';
import Login from './screens/login';


const App = ()=>{
  return (
   
    <NavigationContainer>
    <Tabs />
    </NavigationContainer>
    
    
  );
}

export default App;
