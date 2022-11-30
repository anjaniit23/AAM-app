import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Accomodation from '../screens/accomodation';
import Events from '../screens/events';
import Profile from '../screens/profile';
import Navigation from '../screens/navigation';
import {View, Image} from 'react-native';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        style: {
          postion: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          height: 90,
        },
      }}>
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/h4.webp')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Accomdation"
        component={Accomodation}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/h2.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 35,
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/home.png')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Navigation"
        component={Navigation}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/h3.webp')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../assets/h1.png')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
