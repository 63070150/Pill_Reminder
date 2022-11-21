import React,{useState} from "react";
import { View, Text, Button, StyleSheet,TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import addNewMedicinePage1 from "./AddNewMedicinePage1";
// import addNewMedicinePage2 from "./AddNewMedicinePage2";
// import addNewMedicinePage3 from "./AddNewMedicinePage3";

const Stack = createNativeStackNavigator();

const AddNewMedicineScreen = ({ navigation }) => {
    return (
      <NavigationContainer independent={true} >
        <Stack.Navigator initialRouteName="S1" screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="S1" component={addNewMedicinePage1} />
          {/* <Stack.Screen name="S2" component={addNewMedicinePage2} />
          <Stack.Screen name="S3" component={addNewMedicinePage3} /> */}
        </Stack.Navigator>
      </NavigationContainer>
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
