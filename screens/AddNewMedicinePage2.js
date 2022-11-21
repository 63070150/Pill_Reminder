import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
const AddNewMedicinePage2 = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to Screen 2 !!</Text>
      <Button
        title="Go to Screen 3"
        onPress={() => {
          navigation.navigate("S3");
        }}
      />
    </View>
  );
};
export default AddNewMedicinePage2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
