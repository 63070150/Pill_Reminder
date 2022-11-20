import React, { useState } from "react";
import { Text, View, Switch, StyleSheet } from "react-native";

const RemindersSettingScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
  return (
    <View style={styles.container}>
    <View style={{ flexDirection: 'row',padding:20 ,borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth}}>
      
      <Text  style={{ flex: 1,fontSize:18}}>Reminder</Text>
      <Switch
        trackColor={{ false: "#d9dfe9", true: "#fecdca" }}
        thumbColor={isEnabled ? "#ff8980" : "#a7b2cd"}
        ios_backgroundColor="#d7dee9"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      
    </View>
    <View style={{ flexDirection: 'row',padding:20,borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,}}>
      
      <Text  style={{ flex: 1,fontSize:18}}>Reminder me untill I accept</Text>
      <Switch
        trackColor={{ false: "#d9dfe9", true: "#fecdca" }}
        thumbColor={isEnabled1 ? "#ff8980" : "#a7b2cd"}
        ios_backgroundColor="#d7dee9"
        onValueChange={toggleSwitch1}
        value={isEnabled1}
      />
      
    </View>
    </View>
    
    
  );
};

export default RemindersSettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    flexDirection: 'column'
  },
});
