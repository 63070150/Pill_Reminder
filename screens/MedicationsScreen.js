import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet,Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import db from "../database/firebaseDB";


const MedicationsScreen = ({ navigation, route }) => {
  const [listData, setListData] = useState([]);
  console.log(route.params.active)

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "Medicine"), getData, (error) => {
      console.log(error);
    });
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
      value.active && route.params.active ?
      <View key={index} style={[styles.medic, {flexDirection: 'row'}]} >
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
        <Text style={{opacity: 0.4}}>{value.dosage} tabs | {value.number} times {'\n'}Detail : {value.detail}</Text>
        </View>
      </View> : 
      !value.active && !route.params.active ? 
      <View key={index}  style={[styles.medic, {flexDirection: 'row'}]}>
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
        <Text style={{opacity: 0.4}}>{value.dosage} tabs | {value.number} times {'\n'}Detail : {value.detail}</Text>
        </View>
      </View> : null
    )
  }
    
  return (
    <ScrollView contentContainerStyle={{paddingBottom: "85%", paddingTop: 20, width: "100%", height: "100%", alignItems: "center"}}>
      {listData.map(generateMedicine)}
      </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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

export default MedicationsScreen;