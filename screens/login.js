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
  const [email, onChangeEmail] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

  return (
    <View style={styles.container}>
      <Image
        style={{
          resizeMode: 'contain',
          height: 200,
          width: 350,
          marginTop: 30,
        }}
        source={require('../images/main-login.png')}
      />
      <Text style={styles.text}>ANNUAL ALUMNI MEET</Text>
      <Image
        style={{
          resizeMode: 'contain',
          height: 100,
          width: 100,
        }}
        source={require('../images/login-img.png')}
      />

      <SafeAreaView>
        <Text style={styles.email}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={onChangeEmail}
        />

        <Text style={styles.email}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={onChangePassword}
        />
      </SafeAreaView>
      <Button style={styles.button} title="LOGIN" color="skyblue" />
      <Text style={styles.texts1}>Forgot your password?</Text>
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

  texts: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    textDecorationLine: 'underline',
    color: 'grey',
    paddingTop: 7,
  },

  input: {
    borderRadius: 20,
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
