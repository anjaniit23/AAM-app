import * as React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Linking,
  TextInput,

} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useState} from 'react';
import {text} from 'express';



// const sendNoti = () => {
//   firestore()
//     .collection('usertoken')
//     .get()
//     .then(querySnap => {
//       const userDevicetoken = querySnap.docs.map(docSnap => {
//         return docSnap.data().token;
//       });
//       console.log(userDevicetoken);
//       fetch('https://26ad-202-142-65-225.in.ngrok.io/send-noti', {
//         method: 'post',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },

//         body: JSON.stringify({
//           tokens: userDevicetoken,
//           title:"title",
//           subTitle:"subTitle",
//         }),
//       });
//     });
// };

const Notification = () => {
  const [text, setText] = useState('');
  const [text2, settext2] = useState('');
  const sendNoti = () => {
    firestore()
      .collection('usertoken')
      .get()
      .then(querySnap => {
        const userDevicetoken = querySnap.docs.map(docSnap => {
          return docSnap.data().token;
        });
        console.log(userDevicetoken);
        fetch('https://082e-202-142-65-225.in.ngrok.io/send-noti', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
  
          body: JSON.stringify({
            tokens: userDevicetoken,
            title:text,//Event name
            subTitle:text2,// Venue  and Time
          }),
        });
      });
  };

  return (
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










      <Text>Notification Title</Text>
      <TextInput
         style={styles.input}
        placeholder="Notification Title"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text>Notification Body</Text>
      <TextInput
         style={styles.input}
        placeholder="Notification Title"
        onChangeText={newText2 => settext2(newText2)}
        defaultValue={text2}
      />

      <View style={styles.buttonContainer}>
        {/* <TextInput
        style={{height: 40}}
        placeholder="Type here the title!"
        onChangeText={newTitle => setText(newTitle)}
        defaultValue={title}
    /> */}
        <Button title="Noti" onPress={() => sendNoti()} />
      </View>

      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.textf}>Event:</Text>
          <Text style={styles.textf}> Time:</Text>
          <Text style={styles.textf}>Venue:</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Map"
              onPress={() => {
                Linking.openURL(
                  `https://www.google.com/maps?q=kalidas+auditorium+iit+kharagpur&sa=X&ved=2ahUKEwj0o4bElPn7AhVn4DgGHWxwBJgQ0pQJegQICBAB`,
                );
              }}
              color="rgba(0,255,0,0.2)"
            />
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.textf}>Event:</Text>
          <Text style={styles.textf}> Time:</Text>
          <Text style={styles.textf}>Venue:</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Map"
              onPress={() => {
                Linking.openURL(
                  `https://www.google.com/maps?q=kalidas+auditorium+iit+kharagpur&sa=X&ved=2ahUKEwj0o4bElPn7AhVn4DgGHWxwBJgQ0pQJegQICBAB`,
                );
              }}
              color="rgba(0,255,0,0.2)"
            />
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.textf}>Event:</Text>
          <Text style={styles.textf}> Time:</Text>
          <Text style={styles.textf}>Venue:</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Map"
              onPress={() => {
                Linking.openURL(
                  `https://www.google.com/maps?q=kalidas+auditorium+iit+kharagpur&sa=X&ved=2ahUKEwj0o4bElPn7AhVn4DgGHWxwBJgQ0pQJegQICBAB`,
                );
              }}
              color="rgba(0,255,0,0.2)"
            />
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.textf}>Event:</Text>
          <Text style={styles.textf}> Time:</Text>
          <Text style={styles.textf}>Venue:</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Map"
              onPress={() => {
                Linking.openURL(
                  `https://www.google.com/maps?q=kalidas+auditorium+iit+kharagpur&sa=X&ved=2ahUKEwj0o4bElPn7AhVn4DgGHWxwBJgQ0pQJegQICBAB`,
                );
              }}
              color="rgba(0,255,0,0.2)"
            />
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.textf}>Event:</Text>
          <Text style={styles.textf}> Time:</Text>
          <Text style={styles.textf}>Venue:</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Map"
              onPress={() => {
                Linking.openURL(
                  `https://www.google.com/maps?q=kalidas+auditorium+iit+kharagpur&sa=X&ved=2ahUKEwj0o4bElPn7AhVn4DgGHWxwBJgQ0pQJegQICBAB`,
                );
              }}
              color="rgba(0,255,0,0.2)"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: '#47B5FF',
    backgroundColor: 'rgba(0,255,0,0.2)',
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
  headtext: {
    fontSize: 30,
    marignLeft: 60,
    fontWeight: 200,
  },
  textf: {
    color: 'black',
    fontWeight: '400',
  },

  buttonContainer: {
    width: 50,
    fontColor: 'black',
    borderColor: 'transparent',
    marginLeft: 170,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  
});

export default Notification;

//https://www.google.com/maps?q=iit+kharagpur&sa=X&ved=2ahUKEwi5kvrlkvn7AhVc6jgGHXM2CdMQ0pQJegQICBAB
//https://www.google.com/maps?q=kalidas+auditorium+iit+kharagpur&sa=X&ved=2ahUKEwj0o4bElPn7AhVn4DgGHWxwBJgQ0pQJegQICBAB