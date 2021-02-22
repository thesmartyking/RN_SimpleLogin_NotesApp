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
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Signup from './signup'
import ForgotPass from './forgotpass'
import NotesApp from './mainnote';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidepass, sethidepass] = useState(true);

  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var passreg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
  function validateemail(validate_email)
  {
      if (reg.test(validate_email) === false)
        return false
      else
        return true
  }
  function passwordvalidate(validate_password) {
    // return /[A-Z]/.test(p) && /[0-9]/.test(p) && !/[aeiou]/.test(p) && /^[@#][A-Za-z0-9]{7,13}$/.test(p);
    if (passreg.test(validate_password) === false)
        return false
      else
        return true
  }
  function checkemailpwd(check_email,check_password) {
    
    if(check_email==="" && check_password==="")
    alert("Enter Email & Enter Password")
    else if(check_email!=="" && check_password==="")
    alert("Enter Password")
    else if(check_email==="" && check_password!=="")
    alert("Enter Email")
    else if(check_email!=="" && check_password!=="")
    /* alert("Loading.... \nYour Email:- "+check_email+"\nYour Password:- "+check_password
    // [{text:'OK',onPress:()=> navigation.navigate("Home")}]
    ) */
    // navigation.navigate("Home")
    {
       if(validateemail(check_email)===true && passwordvalidate(check_password)===true)
       {
        Alert.alert(
          'Loading.....',
          'Your Email:- '+check_email+'\nYour Password:- '+check_password
          // +'\nRegex Pwd:- '+password_validate(check_password)
          ,
          [
            /* {
              text: 'Ask me later',
              onPress: () => console.log('Ask me later pressed'),
            },
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            }, */
            // { text: 'OK', onPress: () => console.log('OK Pressed') },
            { text: 'OK', onPress: () => {
              navigation.navigate(NotesApp);
              // setEmail(useState(''));
              // setPassword(useState(''));
              // this.setState({email:''});
              // this.setState({password:''});
              // setPassword('');
            } },
          ],
          { cancelable: false }
        );
       }
       else if(validateemail(check_email)===false && passwordvalidate(check_password)===true)
          alert("Enter Valid Email ID")
       else if(validateemail(check_email)===true && passwordvalidate(check_password)===false)
          alert("Enter Strong Password")
       else
        alert("Enter Valid & Enter Strong Password")

    }
    

  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.image} source={require('./assets/react.png')} />
      <View>
        <Text style={styles.headingText}>
          Welcome to React-Native Login Screen
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
          placeholder="Enter Password"
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

      <TouchableOpacity style={styles.loginBtn}
      onPress={()=> checkemailpwd(email,password)}
      >
        <Text style={styles.loginText}>Log-In</Text>
      </TouchableOpacity>


      <TouchableOpacity
      onPress={()=> navigation.navigate(ForgotPass)}
      >
      <View style={styles.forgot_button}>
        <Text>Forgot Password?</Text>
      </View>
      </TouchableOpacity>
      

      <View style={styles.lineStyle} />
      <Text> Not Registered Yet then Click on Sign-Up</Text>
      <TouchableOpacity 
      style={styles.signBtn}
      onPress={()=> navigation.navigate(Signup)}
      >
        <Text style={styles.loginText} 
        >Sign-Up</Text>
      </TouchableOpacity>
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
    backgroundColor: 'green',
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
    borderWidth: 0.2,
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
