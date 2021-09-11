import React, { useState } from "react";
import { Button, Text, View, StyleSheet, ScrollView } from "react-native";

const ButtonSeparator = () => (
  <View style={styles.buttonSeparator} />
);

const TopSeparator = () => (
  <View style={styles.topSeparator} />
);

const Toggle_Button = (props) => {
  const [isClicked, setIsClicked] = useState(true);

  return (
      <Button
        color = "#F0D574"
        onPress={() => {
          setIsClicked(false);
        }}
        disabled={!isClicked}
        title={isClicked ? props.name : "clicked"}
      />
  );
}

const App = () => {
  return (
    <ScrollView style = {{backgroundColor : "#FFF8D2"}}>
    <TopSeparator />
    <Text style = {styles.titleText}>Treasure Trove</Text>
    <Text style = {styles.subTitleText}>Helping items find their way to those in need.</Text>
    <ButtonSeparator />
      <Toggle_Button name="Log in" />
      <ButtonSeparator />
      <Toggle_Button name="Sign up" />
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
  }
});

export default App;
