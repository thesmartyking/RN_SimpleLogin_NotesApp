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
import Icon from 'react-native-vector-icons/FontAwesome5';
// import Editnote from './editnote';
// import prompt from 'react-native-prompt-android';
// import AlertPrompt from './alertprompt';
// import {Prompt} from 'react-native-prompt-crossplatform';


export default class NotesApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            noteArray: [],
            noteText: '',
            keyvalue:''
        }
    }

    /* editprompt() {
        return(<AlertPrompt />) 
    } */

    render() {

        let notes = this.state.noteArray.map((val, key) => {
            return <Note key={key} 
                val={val}
                deleteMethod={() => this.deleteNote(key)}
                editMethod={() => this.editNote(key)}
            />
        })

        const { navigate } = this.props.navigation;


        return (
            <View style={styles.container}>
                {/* {<View style={styles.header}>
                    <Text style={styles.headerText}>Notes-App</Text>
                </View>} */}

                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>

                <View style={styles.footer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(noteText) => this.setState({ noteText })}
                        value={this.state.noteText}
                        placeholder='Enter Notes to Add to List'
                        placeholderTextColor='white'
                        // onFocus={this.cleartext.bind(this)}
                        // onFocus={() => this.onFocus()}
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </View>

                <TouchableOpacity onPress={this.addTask.bind(this)} 
                style={styles.addButton}>
                    <Text style={styles.addButtonText}>
                    {<Icon name="plus" size={25} />}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.editMethodo.bind(this)} 
                style={styles.editButton}>
                    <Text style={styles.addButtonText}>
                    {<Icon name="edit" size={25} />}
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
    /* cleartext()
    {
        this.textInput.placeholder = "";
        this.textInput.value = "";
        // this.textInput.clear();
    }
    onFocus() {
        this.setState({
            noteText: ''
        });
      }
    focus() {
        this.textInput.focus();
    } */
    /* cleartext()
    {
        this.setState({noteText : ''})
        // alert("Done");
    } */
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
            // this.setState({noteText:this.state.noteText});
            this.setState({noteText:''});
            // this.setState({noteText:""});
            // this.cleartext()
            // alert("Done")
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
               'note':uploadnote
            });

            this.setState({noteArray: this.state.noteArray});
            this.setState({noteText:''});

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
        this.setState({noteText:this.state.noteArray[key].note});
        this.setState({keyvalue:key});
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
            // this.editprompt.bind(this)
            // this.editprompt()
            // return(<AlertPrompt />)

            /* Alert.textInput(
                "Hey"
            ) */
            // this.setState({noteText:this.state.noteArray[key].note});


            // -----------test
            /* alert("Are You Sure want to Delete? \nNote:- "+this.state.noteArray[key].note+"\nCreated on:- "+this.state.noteArray[key].date)
        this.state.noteArray.splice(key,1);
        this.setState({noteArray:this.state.noteArray}); */

        // this.setState({noteText:this.state.noteText});
        // var prnote=this.state.noteArray[key].note;
        // var newnote=this.state.noteText

        /* return(
            <View style={styles.footer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(noteText) => this.setState({ noteText })}
                        value={this.state.noteText}
                        placeholder='Enter Notes to Add to List'
                        placeholderTextColor='white'
                        // onFocus={this.cleartext.bind(this)}
                        // onFocus={() => this.onFocus()}
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </View>
        ) */
        

        // --------------------------------
        /* this.props.navigation.navigate(Editnote, {  
            noteText: this.state.noteText,  
            key:key
        })  */
        // this.props.navigation.navigate(Editnote)


        // ----------------------
         // text: 'Update', onPress: (uptnote) => 
        // text: 'Update', onPress: (updatenote) => 
        /* this.state.noteArray.splice(key,1);
                    this.setState({noteArray:this.state.noteArray}); */
                    /* this.state.noteArray[key].note=updatenote
                    this.setState({noteArray:this.state.noteArray}); */
                    // updateaddTask(uptnote)

        }

    datemethod()
    {
        var date = new Date();
            var dateday=date.getDate()<10 ? '0'+date.getDate() : date.getDate() 
            var datemonth=(date.getMonth() + 1)<10 ? '0'+(date.getMonth() + 1) : (date.getMonth() + 1) 
            var datehours=date.getHours()<10 ? '0'+date.getHours() : date.getHours() 
            var dateminutes=date.getMinutes()<10 ? '0'+date.getMinutes() : date.getMinutes() 
            
            var datetimeString1=dateday+'/'+datemonth+'/'+date.getFullYear()+
               ' - '+datehours+':'+dateminutes

            return datetimeString1   
    }    

    editMethodo()  
    {
        
        // var prnote=this.state.noteArray[key].note;
        var prkey=this.state.keyvalue;
        var prnote=this.state.noteArray[prkey].note;
        // console.log(prnote);
        var newnote=this.state.noteText;
        /* if(prkey==='')
        alert("Please Enter Note then only you can Update it")
        else{ */
        if (newnote==="")
        alert("Click on Update icon any note to Update it")
        else if(newnote===prnote)
        alert("No Changes Made")
        else
        Alert.alert(
            'Edit Note ?',
            "Are You Sure want to Edit the Note? \nPreious Note:- "+this.state.noteArray[prkey].note+
            "\nCreated on:- "+this.state.noteArray[prkey].date+
            "\nUpdated New Note:- "+newnote,
            [
                {text: 'Cancel',},
                { text: 'Update', onPress: () => 
                    {

                        // ------------------Deleting Note & New note in stack
                    /* this.state.noteArray.splice(prkey,1);
                    this.setState({noteArray:this.state.noteArray});
                    this.updateaddTask(newnote) */

                    // prnote=newnote
                    // this.setState({noteArray[prkey].note:newnote});
                    
                    // ---------------For Updating with only notes with dates
                    
                    this.state.noteArray[prkey].date=this.datemethod()
                    this.state.noteArray[prkey].note=this.state.noteText
                    this.setState({noteArray:this.state.noteArray})
                    this.setState({noteText:''});

                    // ---------------For Updating with creating new array
                    /* let newArray = [...this.state.noteArray];
                    newArray[prkey] = {...newArray[prkey], note: newnote}
                    this.setState({noteArray: newArray}); */
                }
              
            }
            ],
            { cancelable: false }
          );
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
        backgroundColor: 'blue',
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
    },
    editButton: {
        position: 'absolute',
        right: 15,
        bottom: 160,
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
