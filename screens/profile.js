import React from 'react';
import {View, SafeAreaView, StyleSheet, Button} from 'react-native';

import { Avatar,
Title,
Caption,
Text,
TouchableRipple,
 } from 'react-native-paper';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Profile = () => {
  return (
   <>
  <SafeAreaView style={styles.container}> 
     <View style={styles.userInfoSection}>
       <View style={{flexDirection:'row',marginTop:30}}>
          <Avatar.Image style={{marginTop:0,marginRight:10}}
             source={require('../assets/profile.png')}
            size={90}
            />
        <View style={{marginLeft:10}}>
          <Title style={[styles.title,
          {
            marginTop:20
            ,
            marginBottom:5
          }]}> Lorem Ispum </Title>
           <Caption style={styles.caption}>@ghvjh </Caption>
        </View>       
       </View>
    </View>
  

  <View style={styles.userInfoSection}>
    <View style={styles.row}>
      {/* <Icon name="map-marker-radius" color="#777777" size={35} style={{marginTop:0}}/> */}
      <Text style={{color:"#777777",marginLeft:25,marginTop:5}}>Address</Text> 
    </View>
    <View style={styles.row}>
      {/* <Icon name="phone" color="#777777" size={35} style={{marginTop:0}}/> */}
      <Text style={{color:"#777777",marginLeft:25,marginTop:5}}>+91XXXXXXXXX</Text> 
    </View>
    <View style={styles.row}>
      {/* <Icon name="email" color="#777777" size={35} style={{marginTop:0}}/> */}
      <Text style={{color:"#777777",marginLeft:25,marginTop:5}}>hvbhjsbjbs@hjsb</Text> 
    </View>
    <View style={styles.row}>
      {/* <Icon name="home" color="#777777" size={35} style={{marginTop:0}}/> */}
      <Text style={{color:"#777777",marginLeft:25,marginTop:5}}>Technology Guest House</Text> 
    </View>
 </View>

  <View style={styles.infoBoxWrapper}>
    <View style={[styles.infoBox,{
      borderRightColor:'#dddddd',
      // borderRightWidth:1

    }]}>
      <Title> 19XX  </Title>
      <Caption>Batch</Caption>
    </View>  
    <View style={styles.infoBox}>
      <Title> Rajendra Prasad  </Title>
      <Caption>Hall of Residence</Caption>
    </View>
  </View>  
</SafeAreaView>    
</>
    );
}

const styles=StyleSheet.create({

container:{
  flex:1,
  // justifyContent:'center',
},
userInfoSection:{
  paddingHorizontal: 30,
  marginBottom:25,
},
title:{
  fontSize:24,
  fontWeight:'bold',
},
caption:{
  fontSize:14,
  lineHeight:14,
  fontWeight:'500'
},

row:{
  flexDirection:'row',
  marginBottom: 10,
},
infoBoxWrapper:{
  borderBottomColor:'#dddddd',
  borderBottomWidth:1,
  borderTopColor:'#dddddd',
  borderTopWidth:1,
  flexDirection:'column',
  height:122,
},
infoBox:{
  width:'50%',
  alignItems:'center',
  justifyContent:'center',
},
// menuWrapper:{
//   marginTop:10,
// },
// menuItem:{
//   flexDirection:'row',
//   paddingVertical:15,
//   paddingHorizontal:30,
// },
// menuItemText:{
//   color:'#777777',
//   marginLeft:20,
//   fontWeight:'600',
//   fontSize:16,
//   lineHeight:26
// },


});

export default Profile;

