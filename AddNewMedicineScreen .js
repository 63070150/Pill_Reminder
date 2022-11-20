import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const AddNewMedicineScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>AddNewMedicineScreen</Text>
      <Button
        title="Click here"
        onPress={() => alert("Button Clicked")}
      ></Button>
    </View>
  );
};

export default AddNewMedicineScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
