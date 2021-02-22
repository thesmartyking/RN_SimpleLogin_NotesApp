import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import Signup from './signup'

export default function ForgotPass({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cnfpassword, setcnfPassword] = useState('');
  const [hidepass, sethidepass] = useState(true);
  // const [hidepass, sethidepass] = useState('');

  function checkemailpwd(check_email, check_password, check_cnfpassword) {
    if (check_email === '' && check_password === '')
      alert('Enter Email & Enter Password');
    else if (check_email !== '' && check_password === '')
      alert('Enter Password');
    else if (check_email === '' && check_password !== '') alert('Enter Email');
    else if (check_email !== '' && check_password !== '') {

      if (check_password === check_cnfpassword) {
        Alert.alert(
          'Loading.....',
          'Your Email:- ' + check_email + '\nYour Password:- ' + check_password+
          '\nConfirm Password:- '+check_cnfpassword+'\nPassword Changed Successfully!!!',
          [
            { text: 'OK', onPress: () => navigation.goBack() },
          ],
          { cancelable: false }
        );
      }
      else
      alert('New Password & Confirm Password is not same');
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.image} source={require('./assets/react.png')} />
      <View>
        <Text style={styles.headingText}>
          React-Native {<Icon name="arrow-circle-right" size={12} />} Forgot
          Password Screen
        </Text>
      </View>
      <View style={styles.lineStyle} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Email"
          placeholderTextColor="#ffffff"
          onChangeText={(email) => setEmail(email)}
          keyboardType='email-address'
        />
      </View>

      <View style={styles.inputpassView}>
        <TextInput
          style={styles.textpassInput}
          placeholder="Enter New Password"
          placeholderTextColor="#ffffff"
          onChangeText={(password) => setPassword(password)}
          secureTextEntry={hidepass ? true : false}
          // secureTextEntry={hidepass ? true : false}
          // secureTextEntry={true}
        />
        <Icon
          name={hidepass ? 'eye-slash' : 'eye'}
          size={20}
          style={styles.imageStyle}
          color="white"
          onPress={() => sethidepass(!hidepass)}
        />
      </View>

      <View style={styles.inputpassView}>
        <TextInput
          style={styles.textpassInput}
          placeholder="Enter Confirm Password"
          placeholderTextColor="#ffffff"
          onChangeText={(cnfpassword) => setcnfPassword(cnfpassword)}
          secureTextEntry={hidepass ? true : false}
          // secureTextEntry={hidepass ? true : false}
          // secureTextEntry={true}
        />
        <Icon
          name={hidepass ? 'eye-slash' : 'eye'}
          size={20}
          style={styles.imageStyle}
          color="white"
          onPress={() => sethidepass(!hidepass)}
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => checkemailpwd(email, password,cnfpassword)}>
        <Text style={styles.loginText}>Change Password</Text>
      </TouchableOpacity>

     {/* <TouchableOpacity>
        <View style={styles.forgot_button}>
          <Text>Forgot Password?</Text>
        </View>
      </TouchableOpacity> 

      <View style={styles.lineStyle} />

      <Text> Not Registered Yet then Click on Sign-Up</Text>
      <TouchableOpacity
        style={styles.signBtn}
        onPress={() => navigation.navigate(Signup)}>
        <Text style={styles.loginText}>Sign-Up</Text>
      </TouchableOpacity>  */}

      <View style={styles.lineStyle} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 105,
    width: 120,
    marginBottom: 10,
  },
  inputView: {
    backgroundColor: '#E66E6E',
    borderRadius: 5,
    width: '80%',
    color: 'white',
    height: 45,
    marginTop: 10,
  },
  inputpassView: {
    backgroundColor: '#E66E6E',
    borderRadius: 5,
    width: '80%',
    color: 'white',
    height: 45,
    marginTop: 10,
    flexDirection: 'row',
  },
  textInput: {
    height: 50,
    flex: 1,
    color: 'white',
    fontFamily: 'monospace',
    fontSize: 15,
    padding: 10,
    marginLeft: 10,
  },
  textpassInput: {
    height: 45,
    flex: 1,
    color: 'white',
    fontFamily: 'monospace',
    fontSize: 15,
    padding: 10,
    marginLeft: 10,
  },
  forgot_button: {
    height: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    backgroundColor: 'blue',
  },
  signBtn: {
    width: '50%',
    borderRadius: 25,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#ad7f00',
  },
  loginText: {
    color: 'white',
    fontSize: 18,
  },
  headingText: {
    color: 'black',
  },
  lineStyle: {
    width: '90%',
    borderWidth: 0.5,
    borderColor: 'grey',
    margin: 10,
  },
  imageStyle: {
    margin: 10,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});
