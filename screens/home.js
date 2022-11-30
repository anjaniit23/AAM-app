import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput } from 'react-native';

const Home = () => {
  return (
    <ScrollView>
      <View>
      <Text style={styles.blue}>Hello,</Text>
       <Text style={styles.red}>XYZ</Text>
      </View>
      <Text style={styles.para}>
        Thank you for registering with us.Hope you reunite with your old
        memories and enjoy this meet
      </Text>
      <View>
      <Text style={styles.alum}>Events</Text>
      </View>
      <View style={styles.second}>
        <View style={styles.first}>
        <Image source={require('../images/a1.webp')} style={styles.img}/>
        <Text style={styles.imp}>ARENA</Text>
        </View>
        <View style={styles.first1}>
          <Image source={require('../images/illu1.webp')} style={styles.img} />
        <Text style={styles.imp}>ILLUMINATION</Text>
        </View> 
      </View>
      <View style={styles.foot}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor:'white'},
  red: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft:40,
    fontSize:30,
  },
  blue: {
    marginLeft:40,
    marginTop:70,
    fontSize:20,
  },
  para: {
    marginLeft:40,
    marginTop:40,
    fontSize:18,
    marginRight:40,
    fontWeight:'600',
    color:'rgb(0,0,0,0.1)',
  },
  alum:{
    marginTop:40,
    marginLeft:40,
    marginRight:20,
    fontSize:20,
    fontWeight:'bold',
    color:'black',
  },
  first:{
    width:150,
    height:210,
    backgroundColor:'rgba(0,255,0,0.2)',
    marginTop:20,
    marginLeft:40,
    marginRight:25,
    borderRadius:20,
  },
  first1:{
    width:150,
    height:210,
    backgroundColor:'rgba(180,200,120,0.3)',
    marginTop:20,
    marginLeft:25,
    marginRight:25,
    borderRadius:20,
  },
  second:{
    display:'flex',
    flexDirection:'row',
  },
  imp:{
    marginTop:5,
    textAlign:'center',
    fontWeight:'700',
    color:'rgba(0,0,0,0.7)',
  }
  ,
  img:{
    width:150,
    height:180,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  foot:{
    width:100,
    height:50,
  }
});

export default Home;
