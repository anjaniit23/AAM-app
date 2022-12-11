import React from 'react';
import {View,ScrollView, Text,StyleSheet,Image} from 'react-native';

const Events = () => {
  return (
    <ScrollView>
      <View style={styles.first}>
        <Image source={require('../images/itenary.png')} style={styles.img}/>
        </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
  
  

  // first:{
  //   width:150,
  //   height:210,    
  //   marginTop:20,
  //   marginLeft:40,
    
   
  // },

  
  imp:{
    marginTop:5,
    textAlign:'center',
    fontWeight:'700',
    color:'rgba(0,0,0,0.7)',
  }
  ,
  // img:{
  //   width:150,
  //   height:180,
  //   borderTopLeftRadius:20,
  //   borderTopRightRadius:20,
  // },
  
});

export default Events;