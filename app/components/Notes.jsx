import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native';


const Notes = ({data}) => {

    return (
        <View style={styles.note}>
            <Text style={styles.noteText}>Date</Text>
            <Text style={styles.noteText}>Note</Text>

            <TouchableOpacity style={styles.noteDelete}>
                <Text style={styles.noteDeleteText}>X</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    note: {
        position: 'relative',
        paddingTop: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#3d3d3d',
        fontSize: 24,
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eb3148',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
    },
    noteDeleteText: {
        color: 'white',
        fontWeight: "700",
        fontSize: 24,
    },
});

export default Notes;