import React, { useState } from "react";
import { Button, Text, View, StyleSheet, ScrollView, Pressable } from "react-native";

const ButtonSeparator = () => (
  <View style={styles.buttonSeparator} />
);

const TopSeparator = () => (
  <View style={styles.topSeparator} />
);

const TitleSeparator = () => (
    <View style={styles.titleSeparator} />
)

const NewButton = (props) => {
  const [isClicked, setIsClicked] = useState(true);

  return (
      <Pressable
      onPress={() => {console.log("Pressed");}}
        style={styles.buttonStyle}
      >
      <Text style = {styles.buttonText}>{props.name}</Text>
      </Pressable>
  );
}

const App = () => {
  return (
    <ScrollView style = {{backgroundColor : "#FFF8D2"}}>
    <TopSeparator />
    <Text style = {styles.titleText}>Treasure Trove</Text>
    <ButtonSeparator />
    <Text style = {styles.subTitleText}>Helping items find their way to those in need.</Text>
    <TitleSeparator />
      <NewButton name="Log in" />
      <ButtonSeparator />
      <NewButton name="Sign up" />
      <ButtonSeparator />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 64,
    fontWeight: "bold",
    textAlign : "center",
    paddingHorizontal : 32,
    fontFamily : "Noteworthy",
},

  subTitleText: {
    fontSize: 24,
    textAlign : "center",
    paddingHorizontal : 48,
  },

  buttonSeparator: {
    marginVertical: 8,
  },

  topSeparator: {
      marginVertical: 64,
  },

  titleSeparator: {
      marginVertical: 32
  },

  buttonStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 40,
    elevation: 3,
    backgroundColor: 'white',
    width: 277,
    borderWidth: 1,
    borderColor: "black",
    shadowColor: "black"
  },

  buttonText: {
      fontSize: 24,
      textAlign : "center",
      color : "black",
  }
});

export default App;
