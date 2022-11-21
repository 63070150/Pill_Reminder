import Calender from "../component/Calender";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import db from "../database/firebaseDB";
import { Ionicons } from "@expo/vector-icons";
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    
  }),
});

const CalendarScreen = () => {
  const [listData, setListData] = useState([]);
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();


  useEffect(() => {
    const unsub = onSnapshot(collection(db, "Medicine"), getData, (error) => {
      console.log(error);
    });
  }, []);

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
  
  function getData(querySnapshot) {
    let dataFromFirebase = []
    querySnapshot.forEach((res) => {
      dataFromFirebase.push(res.data());
    })
    
    setListData(dataFromFirebase)
  }

  function generateMedicine(value, index) {

    return( 
      value.active ?
      <View key={index} style={[styles.medic, {flexDirection: 'row'}]}>
        <View style={{width: '20%', height: '100%'}}>
        <Image
                source={require("../assets/medicine.png")}
                style={{
                  width: '75%',
                  height: '90%',
                }}
              /></View>
        <View style={{width: '90%', height: '100%'}}>
        <Text>{value.name}</Text>
        <Text style={{opacity: 0.4}}>{value.dosage} tabs | {value.number} times{'\n'}Detail : {value.detail}</Text>
        </View>
      </View> : null
    
    )
  }

  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Time to have medicine",
        body: 'You have medicine to use',
        data: { data: 'goes here' },
      },
      trigger: { seconds: 2},
    });
  }

  async function registerForPushNotificationsAsync() {
    let token;
  
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    return token;
  }

  return (
    <View style={styles.container}>
      <Calender></Calender>
      <ScrollView contentContainerStyle={{paddingBottom: "85%", paddingTop: 20, width: "100%", height: "100%", alignItems: "center"}}>
      {listData.map(generateMedicine)}
      {/* <Button
        title="Press to schedule a notification"
        onPress={async () => {
          await schedulePushNotification();
        }}
      /> */}
      </ScrollView>
     
      
    </View>
  );
};

export default CalendarScreen ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },medic: {
    width: "90%",
    height: "30%",
    padding: '5%',
    marginBottom: 20,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 5,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
});
