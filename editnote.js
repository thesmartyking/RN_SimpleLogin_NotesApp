import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Alert,
    TouchableOpacity
} from 'react-native';
import Note from './note';
import NotesApp from './mainnote'
import Icon from 'react-native-vector-icons/FontAwesome5';
// import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';


export default class Editnote extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            noteArray: [],
            noteText: ''
        }
    }

    render() {

        /* let notes = this.state.noteArray.map((val, key) => {
            return <Note key={key} 
                val={val}
                deleteMethod={() => this.deleteNote(key)}
                editMethod={() => this.editNote(key)}
            />
        }) */

        const { navigation } = this.props;  
        const { route } = this.props;  
        /*const pnote = navigation.getParam('noteText');
        const pkey = navigation.getParam('key');   */
        const  {noteText}=route.params
        const  {key}=route.params

        return (
            <View style={styles.container}>
                {<View style={styles.header}>
                    <Text style={styles.headerText}>
                        {JSON.stringify(noteText)}
                    </Text>
                </View>}

                {/* <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView> */}

                <View style={styles.footer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(noteText) => this.setState({ noteText })}
                        value={this.state.noteText}
                        placeholder='Enter Notes to Add to List'
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </View>

                <TouchableOpacity onPress={this.addTask.bind(this)} 
                style={styles.addButton}>
                    <Text style={styles.addButtonText}>
                    {<Icon name="check" size={25} />}
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
    addTask() {
        if (this.state.noteText==="")
        alert("Enter Note")
        else {
            var date = new Date();

            var dateday=date.getDate()<10 ? '0'+date.getDate() : date.getDate() 
            var datemonth=(date.getMonth() + 1)<10 ? '0'+(date.getMonth() + 1) : (date.getMonth() + 1) 
            var datehours=date.getHours()<10 ? '0'+date.getHours() : date.getHours() 
            var dateminutes=date.getMinutes()<10 ? '0'+date.getMinutes() : date.getMinutes() 
            
            var datetimeString=date.getDate()+'/'+(date.getMonth() + 1)+'/'+date.getFullYear()+
              //  <Icon name="arrow-right" size={25} />
               ' - '+date.getHours()+
               ':'+date.getMinutes()
              //  +':'+date.getSeconds()
              //  +':'+date.getUTCSeconds()

               var datetimeString1=dateday+'/'+datemonth+'/'+date.getFullYear()+
               ' - '+datehours+':'+dateminutes

            this.state.noteArray.push({
               'date' : datetimeString1,
               'note':this.state.noteText
            });

            this.setState({noteArray: this.state.noteArray});
            this.setState({noteText:this.state.noteText});
            // this.setState({noteText:""});
        }

    }

    updateaddTask(uploadnote) {
        
            var date = new Date();
            var dateday=date.getDate()<10 ? '0'+date.getDate() : date.getDate() 
            var datemonth=(date.getMonth() + 1)<10 ? '0'+(date.getMonth() + 1) : (date.getMonth() + 1) 
            var datehours=date.getHours()<10 ? '0'+date.getHours() : date.getHours() 
            var dateminutes=date.getMinutes()<10 ? '0'+date.getMinutes() : date.getMinutes() 
            
            var datetimeString1=dateday+'/'+datemonth+'/'+date.getFullYear()+
               ' - '+datehours+':'+dateminutes

            this.state.noteArray.push({
               'date' : datetimeString1,
               'note':this.state.uploadnote
            });

            this.setState({noteArray: this.state.noteArray});
            this.setState({noteText:this.state.uploadnote});

    }

    deleteNote(key){
        Alert.alert(
            'Delete Note ?',
            "Are You Sure want to Delete? \nNote:- "+this.state.noteArray[key].note+"\nCreated on:- "+this.state.noteArray[key].date,
            [
              {
                text: 'Cancel',
              },
              { 
                text: 'OK', onPress: () => 
                {
                    this.state.noteArray.splice(key,1);
                    this.setState({noteArray:this.state.noteArray});
                }
              
            }
            ],
            { cancelable: false }
          );
    }

    editNote(key){
        /* alert("Are You Sure want to Delete? \nNote:- "+this.state.noteArray[key].note+"\nCreated on:- "+this.state.noteArray[key].date)
        this.state.noteArray.splice(key,1);
        this.setState({noteArray:this.state.noteArray}); */

        
        Alert.alert(
            'Edit Note ?',
            "Are You Sure want to Edit? \nNote:- "+this.state.noteArray[key].note+"\nCreated on:- "+this.state.noteArray[key].date+
            "\nUpdate From Here by Entering New Note",
            [
                {
                    text: 'Cancel',
                },
                { 
                // text: 'Update', onPress: (uptnote) => 
                // text: 'Update', onPress: (updatenote) => 
                text: 'Update', onPress: () => 
                {
                    /* this.state.noteArray.splice(key,1);
                    this.setState({noteArray:this.state.noteArray}); */
                    /* this.state.noteArray[key].note=updatenote
                    this.setState({noteArray:this.state.noteArray}); */
                    // updateaddTask(uptnote)
                }
              
            }
            ],
            { cancelable: false }
          );

       


    }

    promptjs(key)
    {
        /* this.render()
        {
            // return(
                <Prompt
                        title="Update/Edit Note ?"
                        placeholder='Edit Note....'
                        isVisible={this.state.visiblePrompt}
                        onChangeText={(text) => {this.setState({ promptValue: text });}}
                        onCancel={() => {this.setState({promptValue: '',visiblePrompt: false,});}}
                        onSubmit={() => {
                            this.state.noteArray[key].note=promptValue
                            this.setState({noteArray:this.state.noteArray,visiblePrompt: false,});
                            }}
                />
            // )
        } */

        /*  Prompt(
        {
            title="Update/Edit Note ?",
            placeholder='Edit Note....',
            defaultValue='Edit Note....',
            onChangeText=this.setState({ promptValue: text }),
            submitButtonText='Update',
            onSubmit=(
                this.state.noteArray[key].note=promptValue,
                this.setState({noteArray:this.state.noteArray})
                ),
            cancelButtonText='Cancel',
            onCancel=(this.setState({promptValue: '',visiblePrompt: false,}))
        }) */
        
        /* Prompt(
            {
                title="Update/Edit Note ?",
                placeholder='Edit Note....',
                defaultValue='Edit Note....',
                onChangeText=this.setState({ promptValue: text }),
                submitButtonText='Update',
                onSubmit=(
                    this.state.noteArray[key].note=promptValue,
                    this.setState({noteArray:this.state.noteArray})
                    ),
                cancelButtonText='Cancel',
                onCancel=(this.setState({promptValue: '',visiblePrompt: false,}))
            }) */

            // this.render()
            // {
                // <AlertPrompt />
            // }
            
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#3933FF',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd',
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26,
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        fontSize:18,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
    },
    addButton: {
        position: 'absolute',
        right: 15,
        bottom: 80,
        backgroundColor: 'green',
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
    },
    addButtonText: {
        color: '#fff',
    },
});
