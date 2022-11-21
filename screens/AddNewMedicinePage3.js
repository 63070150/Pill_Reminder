import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
const AddNewMedicinePage3 = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to Screen 3 !!</Text>
      <Button
        title="Go to the first screen"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};
export default AddNewMedicinePage3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
