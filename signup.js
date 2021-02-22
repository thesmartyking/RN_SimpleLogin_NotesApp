import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
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
// import { TextInput } from 'react-native-paper';

export default function Signup({navigation}) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [cnfpassword, setcnfPassword] = useState('');
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
  function checksignupemailpwd(c_name,c_number,check_email,check_password,check_cnfpassword) {
  /*
    if(c_name!=="" && c_number!=="")
    {
    if(check_email==="" && check_password==="" && check_cnfpassword==="")
    alert("Enter Email & Enter Password & Enter Confirm Password")
    else if(check_email!=="" && check_password==="" && check_cnfpassword==="")
    alert("Enter Password & Enter Confirm Password")
    else if(check_email==="" && check_password!=="" && check_cnfpassword==="")
    alert("Enter Email & Enter Confirm Password")
    else if(check_email==="" && check_password==="" && check_cnfpassword!=="")
    alert("Enter Email & Enter Password")
    else if(check_email==="" && check_password!=="" && check_cnfpassword!=="")
    alert("Enter Email")
    else if(check_email!=="" && check_password!=="" && check_cnfpassword==="")
    alert("Enter Confirm Password")
    else if(check_email!=="" && check_password==="" && check_cnfpassword!=="")
    alert("Enter Password")
    else if(check_email!=="" && check_password!=="" && check_cnfpassword!=="")
    {
      if(validateemail(check_email)===true && passwordvalidate(check_password)===true)
      {
       Alert.alert(
         'Loading.....',
         'Your Email:- '+check_email+'\nYour Password:- '+check_password
         ,
         [
            {
             text: 'Ask me later',
             onPress: () => console.log('Ask me later pressed'),
           },
           {
             text: 'Cancel',
             onPress: () => console.log('Cancel Pressed'),
             style: 'cancel',
           },
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
  else if(c_name==="" && c_number==="")
    alert("Enter Name & Enter Phone Number")
  else if(c_name!=="" && c_number==="")
    alert("Enter Phone Number")
  else if(c_name==="" && c_number!=="")
    alert("Enter Name")  
    
    */

// -------------------------------------------1-----------------------------------------------------
    if(c_name==="" && c_number==="" && check_email==="" && check_password==="" && check_cnfpassword==="")
      alert("Enter Name \nEnter Email\nEnter Password \nEnter Confirm Password \nEnter Phone Number")
    else if(c_name==="" && c_number==="" && check_email==="" && check_password==="" && check_cnfpassword!=="")
      alert("Enter Name \nEnter Email \nEnter Password \nEnter Phone Number")
    else if(c_name==="" && c_number==="" && check_email==="" && check_password!=="" && check_cnfpassword==="")
      alert("Enter Name \nEnter Email\nEnter Confirm Password \nEnter Phone Number")
    else if(c_name==="" && c_number==="" && check_email==="" && check_password!=="" && check_cnfpassword!=="")
      alert("Enter Name \nEnter Email \nEnter Phone Number")
    else if(c_name==="" && c_number==="" && check_email!=="" && check_password==="" && check_cnfpassword==="")
      alert("Enter Name \nEnter Password \nEnter Confirm Password \nEnter Phone Number")
    else if(c_name==="" && c_number==="" && check_email!=="" && check_password==="" && check_cnfpassword!=="")
      alert("Enter Name \nEnter Password  \nEnter Phone Number")
    else if(c_name==="" && c_number==="" && check_email!=="" && check_password!=="" && check_cnfpassword==="")
      alert("Enter Name \nEnter Confirm Password \nEnter Phone Number")
    else if(c_name==="" && c_number==="" && check_email!=="" && check_password!=="" && check_cnfpassword!=="")
      alert("Enter Name \nEnter Phone Number")
    else if(c_name==="" && c_number!=="" && check_email==="" && check_password==="" && check_cnfpassword==="")
      alert("Enter Name \nEnter Email\nEnter Password \nEnter Confirm Password")
    else if(c_name==="" && c_number!=="" && check_email==="" && check_password==="" && check_cnfpassword!=="")
      alert("Enter Name \nEnter Email\nEnter Password ")
    else if(c_name==="" && c_number!=="" && check_email==="" && check_password!=="" && check_cnfpassword==="")
      alert("Enter Name \nEnter Email \nEnter Confirm Password ")
    else if(c_name==="" && c_number!=="" && check_email==="" && check_password!=="" && check_cnfpassword!=="")
      alert("Enter Name \nEnter Email ")
    else if(c_name==="" && c_number!=="" && check_email!=="" && check_password==="" && check_cnfpassword==="")
      alert("Enter Name \nEnter Password \nEnter Confirm Password ")
    else if(c_name==="" && c_number!=="" && check_email!=="" && check_password==="" && check_cnfpassword!=="")
      alert("Enter Name \nEnter Password ")
    else if(c_name==="" && c_number!=="" && check_email!=="" && check_password!=="" && check_cnfpassword==="")
      alert("Enter Name  \nEnter Confirm Password ")
    else if(c_name==="" && c_number!=="" && check_email!=="" && check_password!=="" && check_cnfpassword!=="")
      alert("Enter Name ")
    
   // -------------------------------------------2----------------------------------------------------
   if(c_name!=="" && c_number==="" && check_email==="" && check_password==="" && check_cnfpassword==="")
   alert("Enter Email\nEnter Password \nEnter Confirm Password \nEnter Phone Number")
 else if(c_name!=="" && c_number==="" && check_email==="" && check_password==="" && check_cnfpassword!=="")
   alert("Enter Email \nEnter Password \nEnter Phone Number")
 else if(c_name!=="" && c_number==="" && check_email==="" && check_password!=="" && check_cnfpassword==="")
   alert("Enter Email\nEnter Confirm Password \nEnter Phone Number")
 else if(c_name!=="" && c_number==="" && check_email==="" && check_password!=="" && check_cnfpassword!=="")
   alert("Enter Email \nEnter Phone Number")
 else if(c_name!=="" && c_number==="" && check_email!=="" && check_password==="" && check_cnfpassword==="")
   alert("Enter Password \nEnter Confirm Password \nEnter Phone Number")
 else if(c_name!=="" && c_number==="" && check_email!=="" && check_password==="" && check_cnfpassword!=="")
   alert("Enter Password  \nEnter Phone Number")
 else if(c_name!=="" && c_number==="" && check_email!=="" && check_password!=="" && check_cnfpassword==="")
   alert("Enter Confirm Password \nEnter Phone Number")
 else if(c_name!=="" && c_number==="" && check_email!=="" && check_password!=="" && check_cnfpassword!=="")
   alert("Enter Phone Number")
 else if(c_name!=="" && c_number!=="" && check_email==="" && check_password==="" && check_cnfpassword==="")
   alert("Enter Email\nEnter Password \nEnter Confirm Password")
 else if(c_name!=="" && c_number!=="" && check_email==="" && check_password==="" && check_cnfpassword!=="")
   alert("Enter Email\nEnter Password ")
 else if(c_name!=="" && c_number!=="" && check_email==="" && check_password!=="" && check_cnfpassword==="")
   alert("Enter Email \nEnter Confirm Password ")
 else if(c_name!=="" && c_number!=="" && check_email==="" && check_password!=="" && check_cnfpassword!=="")
   alert("Enter Email ")
 else if(c_name!=="" && c_number!=="" && check_email!=="" && check_password==="" && check_cnfpassword==="")
   alert("Enter Password \nEnter Confirm Password ")
 else if(c_name!=="" && c_number!=="" && check_email!=="" && check_password==="" && check_cnfpassword!=="")
   alert("Enter Password ")
 else if(c_name!=="" && c_number!=="" && check_email!=="" && check_password!=="" && check_cnfpassword==="")
   alert("Enter Confirm Password ")
 else if(c_name!=="" && c_number!=="" && check_email!=="" && check_password!=="" && check_cnfpassword!=="") 
  {
    if(validateemail(check_email)===true && passwordvalidate(check_password)===true)
    {
      if(check_cnfpassword===check_password)
      {
      Alert.alert(
       'Registering.....',
       'Your Name:- '+c_name
       +'\nYour Email:- '+check_email
       +'\nYour Password:- '+check_password
       +'\nYour Confirm Password:- '+check_cnfpassword
       +'\nYour Phone Number:- '+c_number,
       [
         { text: 'Register', onPress: () => {
           navigation.goBack();
         } },
       ],
       { cancelable: false }
     );
      }
      else
      {
        alert("Confirm Password is not Equal to Password & Enter Confirm Password Again same as Password")
      }
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
    // <ScrollView>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.image} source={require('./assets/react.png')} />
      <View>
        <Text style={styles.headingText}>
          Welcome to React-Native Sign-Up Screen
        </Text>
      </View>
      <View style={styles.lineStyle} />

      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Name"
          placeholderTextColor="#ffffff"
          onChangeText={(name) => setName(name)}
        />
      </View>

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
        />
        <Icon
          name={hidepass ? 'eye-slash' : 'eye'}
          size={20}
          style={styles.imageStyle}
          color="white"
          onPress={() => sethidepass(!hidepass)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          maxLength={10}
          keyboardType='numeric'
          placeholder="Enter Phone Number"
          placeholderTextColor="#ffffff"
          onChangeText={(number) => setNumber(number)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn}
      onPress={()=> checksignupemailpwd(name,number,email,password,cnfpassword)}
      >
        <Text style={styles.loginText}>Register & Sign-Up</Text>
      </TouchableOpacity>

      <View style={styles.lineStyle} />
      <Text> If Registered then Click on Log-In</Text>
      <TouchableOpacity style={styles.signBtn} 
      // onPress={()=> navigation.navigate(Login)}>
      onPress={()=> navigation.goBack()}>
        <Text style={styles.loginText}>Log-In</Text>
      </TouchableOpacity>
    </View>
    // </ScrollView>
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
  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: 'blue',
  },
  signBtn: {
    width: '50%',
    borderRadius: 25,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: 'green',
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
