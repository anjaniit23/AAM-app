import * as React from 'react';
import { Appbar} from 'react-native-paper';
import {  ScrollView,StyleSheet,View,Text } from 'react-native';



const Notification = () => {
  
  return (
    <ScrollView style={styles.container}>
    <Appbar.Header>
       <Appbar.Action icon="bell"  />
      <Appbar.Content title="Notifications" />
    </Appbar.Header>
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text>Event:</Text>
        <Text>Venue:</Text>
        <Text>                                               Time:</Text>
      </View>
    </View>
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text>Event:</Text>
        <Text>Venue:</Text>
        <Text>                                               Time:</Text>
      </View>
    </View>
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text>Event:</Text>
        <Text>Venue:</Text>
        <Text>                                               Time:</Text>
      </View>
    </View>
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text>Event:</Text>
        <Text>Venue:</Text>
        <Text>                                               Time:</Text>
      </View>
    </View>
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text>Event:</Text>
        <Text>Venue:</Text>
        <Text>                                               Time:</Text>
      </View>
    </View>
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text>Event:</Text>
        <Text>Venue:</Text>
        <Text>                                               Time:</Text>
      </View>
    </View>
    




    </ScrollView>
  );
};




const styles = StyleSheet.create({
    
    container:{
      backgroundColor:'#DFF6FF'
    },
    card: {
     borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor:'#47B5FF'
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
   
  
});

export default Notification;