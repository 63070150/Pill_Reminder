import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const MedicationsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>MedicationsScreen</Text>
      <Button
        title="Click here"
        onPress={() => alert("Button Clicked")}
      ></Button>
    </View>
  );
};

export default MedicationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
