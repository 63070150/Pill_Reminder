import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import db from "../database/firebaseDB";

const MedicationsScreen = ({ navigation }) => {
  const [listData, setListData] = useState([]);

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
      <View key={index} style={styles.medic}>
        <Text>{value.name}</Text>
        <Text style={{opacity: 0.4}}>{value.dosage} tabs | {value.number} times</Text>
      </View>
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
  },
  medic: {
    width: "90%",
    height: "25%",
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "center",
    marginBottom: 20,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 5,
    backgroundColor: "#fff"
  },

});

export default MedicationsScreen;