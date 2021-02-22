import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Note extends React.Component {
    render() {
        return (
            <View key={this.props.key} style={styles.note}>
                <Text style={styles.noteText1}>{this.props.val.date}</Text>
                {/* <Text style={styles.noteText1}></Text> */}
                <Text style={styles.noteText}>{this.props.val.note}</Text>
                <TouchableOpacity onPress={this.props.editMethod} style={styles.noteEdit}>
                    <Text style={styles.noteDeleteText}>{<Icon name="edit" size={24} color='blue'/>}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                    <Text style={styles.noteDeleteText}>{<Icon name="trash-alt" size={24} color='red'/>}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: 'green',
        fontSize:18,
        fontWeight:'bold'
    },
    noteText1: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: 'green',
        fontSize:12
    },
    noteEdit: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 50
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    noteDeleteText: {
        color: 'white',
    }
})