import * as React from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login'
import Signup from './signup'
import ForgotPass from './forgotpass'
import NotesApp from './mainnote'
import Editnote from './editnote'

function HomeScreen({ navigation, route }) {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
  );
}

function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        color='green'
        onPress={() => {
          // Pass params back to home screen
          if(postText==="")
          alert("Enter Something!!")   
          else
          navigation.navigate('Home', { post: postText });
        }}
      />
    </>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      mode="modal"
      // headerMode='none'
      // mode='card'
      >

        <Stack.Screen name="Log-In" component={Login}  
          options={{headerStyle: {backgroundColor: 'blue'}, headerTintColor: '#fff'}}
        />
        <Stack.Screen name="Signup" component={Signup}  
          options={{headerStyle: {backgroundColor: 'green'}, headerTintColor: '#fff'}}
        />
        <Stack.Screen name="ForgotPass" component={ForgotPass}  
          options={{headerStyle: {backgroundColor: 'brown'}, headerTintColor: '#fff'}}
        />
        <Stack.Screen name="NotesApp" component={NotesApp}  
          options={{headerStyle: {backgroundColor: 'orange'}, headerTintColor: '#fff'}}
        />
        {/* <Stack.Screen name="Editnote" component={Editnote}  
          options={{headerStyle: {backgroundColor: 'blue'}, headerTintColor: '#fff'}}
        /> */}
        {/* <Stack.Screen name="Home" component={HomeScreen} 
          options={{headerStyle: {backgroundColor: 'orange'}, headerTintColor: '#fff'}}
        />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} 
          options={{headerStyle: {backgroundColor: 'red'}, headerTintColor: '#fff'}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
