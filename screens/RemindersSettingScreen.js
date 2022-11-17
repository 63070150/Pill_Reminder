import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const RemindersSettingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>RemindersSettingScreen</Text>
      <Button
        title="Click here"
        onPress={() => alert("Button Clicked")}
      ></Button>
    </View>
  );
};

export default RemindersSettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
