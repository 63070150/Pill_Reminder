import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import CalendarScreen from "../screens/CalendarScreen";
import AddNewMedicineScreen from "../screens/AddNewMedicineScreen ";
import MedicationsScreen from "../screens/MedicationsScreen";
import RemindersSettingScreen from "../screens/RemindersSettingScreen";
import RefillMedicineScreen from "../screens/RefillMedicineScreen";
import { Ionicons , AntDesign, Feather } from "@expo/vector-icons";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const TopTab = createMaterialTopTabNavigator();

const Bottomtab = createBottomTabNavigator();

function ToptapBar (){
  return( <TopTab.Navigator >
    <TopTab.Screen name="Active" component={MedicationsScreen} initialParams={{active: true}} options={{tabBarIndicatorStyle:{
      backgroundColor:"#fc8b83",
    }}}
    />
    <TopTab.Screen name="Completed" component={MedicationsScreen} initialParams={{active: false}} options={{tabBarIndicatorStyle:{
      backgroundColor:"#fc8b83"
    }}}/>
  </TopTab.Navigator>)
}

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity 
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow
    }}
    onPress={onPress}
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor:'#ff8980',
        }}>
            {children}
        </View>
    </TouchableOpacity>
);

const Tabs = () => {
  return (
    <Bottomtab.Navigator 
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          height: 90,   
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          shadowOpacity: 0.3,
          shadowRadius: 16.0,
          elevation: 24,
          width: '100%',
          zIndex: 0,
        },
      }}
    >
      <Bottomtab.Screen 
        name="Home"
        component={CalendarScreen} 
        options={{
        headerTitle: "Today's Meds",
        headerStyle: {
          shadowOpacity: 5,
          shadowRadius: 16.0,
        },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/calendar.png")}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#18acba" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#18acba" : "#748c94", fontSize: 12 }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Bottomtab.Screen
        name="Medication"
        component={ToptapBar}
        options={{
        headerTitle: "Medications",
        headerStyle: {
          shadowOpacity: 5,
          shadowRadius: 16.0,
        },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/Medicine-box.png")}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#18acba" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#18acba" : "#748c94", fontSize: 12 }}
              >
                Medication
              </Text>
            </View>
          ),
        }}
      />
      <Bottomtab.Screen
        name="AddNewMedicine"
        component={AddNewMedicineScreen}
        options={{
          headerStyle: {
            shadowOpacity: 5,
            shadowRadius: 16.0,
          },
          tabBarIcon: ({ focused }) => (
            <Image
                source={require("../assets/plus.png")}
                style={{
                  width: 30,
                  height: 30,
                  tintColor:"#ffffff",
                }}
              />    
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton{...props}/>
          )
        }}
      />
      <Bottomtab.Screen
        name="RefillMedicine"
        component={RefillMedicineScreen}
        options={{
        headerTitle: "Refill Medicine",
        headerStyle: {
          shadowOpacity: 5,
          shadowRadius: 16.0,
        },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/refill.png")}
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#18acba" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#18acba" : "#748c94", fontSize: 12 }}
              >
                Refill
              </Text>
            </View>
          ),
        }}
      />
      <Bottomtab.Screen
        name="RemindersSetting"
        component={RemindersSettingScreen}
        options={{
            headerTitle: "Reminder Settings",
            headerStyle: {
              shadowOpacity: 5,
              shadowRadius: 16.0,
            },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
               <Feather   name="settings" size={24} color={focused ? "#18acba" : "#748c94"}/>
              <Text
                style={{ color: focused ? "#18acba" : "#748c94", fontSize: 12 }}
              >
                Setting
              </Text>
            </View>
          )
        }}
      />
    </Bottomtab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    shadowcolor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
