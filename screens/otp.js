import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  Button,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Forgot Password</Text>

      <SafeAreaView>
        <Text style={styles.email}>Enter Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#003f5c"
        />
        <Text style={styles.email}>Enter the OTP sent on the email</Text>
        <TextInput
          style={styles.input}
          placeholder="OTP"
          placeholderTextColor="#003f5c"
        />
      </SafeAreaView>
      <Button style={styles.button} title="NEXT" color="skyblue" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal: 16,
    padding: 5,
    //  border:234 solid black,
  },
  text: {
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 34,
    elevation: 3,
    backgroundColor: 'black',
  },

  input: {
    borderRadius: 13,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginBottom: 38,
  },

  texts1: {
    fontSize: 15,
    marginTop: 21,
    textAlign: 'center',
    color: 'blue',
    textDecorationLine: 'underline',
  },

  email: {
    marginLeft: 23,
  },
});

export default App;
