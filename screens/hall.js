import React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';


// or any pure javascript modules available in npm
const listTab = [
  {
    gh: 'TGH',
  },
  {
    gh: 'SAM',
  },
];

const data = [
  {
    name: 'Luffy',
    year: '1973',
    gh: 'TGH',
    room: 'T-abc',
  },
  {
    name: 'Naruto',
    year: '1983',
    gh: 'SAM',
    room: 'S-abc',
  },
  {
    name: 'Goku',
    year: '1998',
    gh: 'TGH',
    room: 'T-bcd',
  },
  {
    name: 'Sasuke',
    year: '1983',
    gh: 'SAM',
    room: 'S-bcd',
  }
];

const data2 = [
  {
    name: 'Luffy',
    year: '1973',
    gh: 'TGH',
    room: 'T-abc',
  },
  {
    name: 'Goku',
    year: '1998',
    gh: 'TGH',
    room: 'T-bcd',
  },
];

const Accogh = () => {
  const [gh, setGh] = useState('TGH')
  const [datalist, setDatalist] = useState(data2)
  const setGhFilter = gh => { 
      setDatalist([...data.filter(e => e.gh === gh)])
      setGh(gh)
  }

  const renderItem = ({item, index}) => {
    return(
      <View key={index} style={styles.itemContainer}>
        <Text> {item.name} </Text>
        <Text> {item.room} </Text>
      </View> 
    )
  }

  const separator = () =>{
    return (
      <View style={{height:1}} />
    )
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.listTab}>{
        listTab.map(e => (
          <TouchableOpacity 
          style={[styles.btnTab, gh === e.gh && styles.btnTabActive]} 
          onPress={() => setGhFilter(e.gh)}
          >
          <Text style = {styles.textTab, gh === e.gh && styles.textTabActive}>
            {e.gh}
          </Text>
        </TouchableOpacity>) ) 
      }
      </View>
      <FlatList
        data = {datalist}
        keyExtractor={(e, i) => i.toString() }
        renderItem = {renderItem}
        ItemSeparatorComponent = {separator}
      />
    </SafeAreaView>
  )
}

export default Accogh


const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  listTab:{
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20, 
  },
  btnTab:{
    width: Dimensions.get('window').width / 2.1,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#EBEBEB',
    padding: 10,
    justifyContent: 'center',
  },
  textTab:{
    fontSize: 16, 
  },
  btnTabActive:{
    //backgroundColor: '#E6838D',
    borderBottomWidth: 3.5,
  },
  textTabActive:{
    //color: '#fff',
  },
  itemContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.2,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 15,
  },
})
