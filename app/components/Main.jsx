import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Notes from "./Notes";

const Main = () => {
  const [notes, setNotes] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const addNote = useCallback(() => {
    if (inputVal.length) {
      const d = new Date();
      const playload = {
        date: `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} - ${d.getMonth()}/${d.getDate()}/${d.getFullYear()}`,
        note: inputVal,
      };
      setNotes([playload, ...notes]);
      setInputVal("");
    }
  }, [notes, inputVal]);

  const onDelete = useCallback(
    (index) => () => {
      notes.splice(index, 1);
      setNotes([...notes]);
    },
    [notes]
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}> - RAD To Do's -</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {notes.map((item, i) => (
          <Notes key={i} data={item} onDelete={onDelete(i)} />
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <TextInput
          value={inputVal}
          onChangeText={(userInput) => setInputVal(userInput)}
          style={styles.textInput}
          placeholder="> add something rad..."
          placeholderTextColor="#eee"
          underlineColorAndroid="transparent"
          defaultValue="hello"
          onSubmitEditing={addNote}
        ></TextInput>
      </View>
      <TouchableOpacity onPress={addNote} style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#3d3d3d",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#ddd",
    paddingTop: 20,
  },
  headerText: {
    color: "#FFD700",
    fontSize: 36,
    paddingTop: 26,
    fontWeight: "500",
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: "stretch",
    color: "#FFD700",
    padding: 20,
    marginBottom: 20,
    marginHorizontal: 15,
    borderRadius: 50,
    backgroundColor: "#252525",
    borderTopWidth: 2,
    borderTopColor: "#ededed",
    fontSize: 32,
  },
  addButton: {
    position: "absolute",
    zIndex: 110,
    right: 20,
    bottom: 100,
    backgroundColor: "#3d3d3d",
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: "center",
  },
  addButtonText: {
    color: "#FFD700",
    fontSize: 30,
    fontWeight: "700",
  },
});

export default Main;