import React, { useState } from "react";
import { Button, Text, View, StyleSheet, ScrollView, Pressable } from "react-native";

const ButtonSeparator = () => (
  <View style={styles.buttonSeparator} />
);

const TopSeparator = () => (
  <View style={styles.topSeparator} />
);

const NewButton = (props) => {
  const [isClicked, setIsClicked] = useState(true);

  return (
      <Pressable
        onPress={() => {
          setIsClicked(false);
        }}
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
    <Text style = {styles.subTitleText}>Helping items find their way to those in need.</Text>
    <ButtonSeparator />
      <NewButton name="Log in" />
      <ButtonSeparator />
      <NewButton name="Sign up" />
      <ButtonSeparator />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 48,
    fontWeight: "bold",
    textAlign : "center",
},

  subTitleText: {
    fontSize: 24,
    textAlign : "center",
  },
  buttonSeparator: {
    marginVertical: 8,
  },

  topSeparator: {
      marginVertical: 32,
  },

  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#F0D574",
  },

  buttonText: {
      fontSize: 24,
      textAlign : "center",
      color : "white",
  }
});

export default App;
