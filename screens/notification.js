import * as React from 'react';
import {  SafeAreaView,ScrollView,StyleSheet,View,Text,Image ,Button, Linking,} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Notification = () => {
  
  return (
    <SafeAreaProvider>
    <ScrollView style={styles.container}>
   
    {/* <View style={{flexDirection:'row'}}>
    <Image
        style={{
          resizeMode: 'contain',
          height: 30,
          width: 30,
          margin:10,
          

          
        }}
        source={require('../images/bell.png')}
      />
      <Text style={styles.headtext}>Notifications</Text>
    </View> */}
    
    {/* <View style={styles.buttonContainer}>
    <Button title="Map" onPress={() => {
                    Linking.openURL(`https://www.google.com/maps?q=kalidas+auditorium+iit+kharagpur&sa=X&ved=2ahUKEwj0o4bElPn7AhVn4DgGHWxwBJgQ0pQJegQICBAB`)
        }} color="" />
               
    </View> */}
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.textf}>Event:</Text>
        <Text style={styles.textf}>                                               Time:</Text>
        <Text  style={styles.textf} >Venue:</Text><View style={styles.buttonContainer}><Button title="Map" onPress={() => {
                    Linking.openURL(`https://www.google.com/maps?q=kalidas+auditorium+iit+kharagpur&sa=X&ved=2ahUKEwj0o4bElPn7AhVn4DgGHWxwBJgQ0pQJegQICBAB`)
        }} color="rgba(0,255,0,0.2)" /></View>
        
      </View>
    </View>
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.textf}>Event:</Text>
        <Text style={styles.textf}>                                               Time:</Text>
        <Text  style={styles.textf} >Venue:</Text><View style={styles.buttonContainer}><Button title="Map" onPress={() => {
                    Linking.openURL(`https://www.google.com/maps?q=kalidas+auditorium+iit+kharagpur&sa=X&ved=2ahUKEwj0o4bElPn7AhVn4DgGHWxwBJgQ0pQJegQICBAB`)
        }} color="rgba(0,255,0,0.2)" /></View>
        
      </View>
    </View>
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.textf}>Event:</Text>
        <Text style={styles.textf}>                                               Time:</Text>
        <Text  style={styles.textf} >Venue:</Text><View style={styles.buttonContainer}><Button title="Map" onPress={() => {
                    Linking.openURL(`https://www.google.com/maps?q=kalidas+auditorium+iit+kharagpur&sa=X&ved=2ahUKEwj0o4bElPn7AhVn4DgGHWxwBJgQ0pQJegQICBAB`)
        }} color="rgba(0,255,0,0.2)" /></View>
        
      </View>
    </View>
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.textf}>Event:</Text>
        <Text style={styles.textf}>                                               Time:</Text>
        <Text  style={styles.textf} >Venue:</Text><View style={styles.buttonContainer}><Button title="Map" onPress={() => {
                    Linking.openURL(`https://www.google.com/maps?q=kalidas+auditorium+iit+kharagpur&sa=X&ved=2ahUKEwj0o4bElPn7AhVn4DgGHWxwBJgQ0pQJegQICBAB`)
        }} color="rgba(0,255,0,0.2)" /></View>
        
      </View>
    </View>
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.textf}>Event:</Text>
        <Text style={styles.textf}>                                               Time:</Text>
        <Text  style={styles.textf} >Venue:</Text><View style={styles.buttonContainer}><Button title="Map" onPress={() => {
                    Linking.openURL(`https://www.google.com/maps?q=kalidas+auditorium+iit+kharagpur&sa=X&ved=2ahUKEwj0o4bElPn7AhVn4DgGHWxwBJgQ0pQJegQICBAB`)
        }} color="rgba(0,255,0,0.2)" /></View>
        
      </View>
    </View>

    
   
    </ScrollView>
    </SafeAreaProvider>
  );
};




const styles = StyleSheet.create({
    
    container:{
      backgroundColor:'#fff'
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
    borderColor:'#47B5FF',
    backgroundColor:'rgba(0,255,0,0.2)'
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
  headtext:{
    fontSize:30,
    marignLeft:60,
    fontWeight:200,
  },
  textf:{
    color: 'black',
    fontWeight:'400'

  },
  
  buttonContainer: {
    width:50,
    fontColor:'black',
    borderColor: 'transparent',
    marginLeft:170,
    
  },
  
   
  
});

export default Notification;

//https://www.google.com/maps?q=iit+kharagpur&sa=X&ved=2ahUKEwi5kvrlkvn7AhVc6jgGHXM2CdMQ0pQJegQICBAB
//https://www.google.com/maps?q=kalidas+auditorium+iit+kharagpur&sa=X&ved=2ahUKEwj0o4bElPn7AhVn4DgGHWxwBJgQ0pQJegQICBAB
