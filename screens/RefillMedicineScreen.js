import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet,Image,TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import db from "../database/firebaseDB";
import { AntDesign } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native";

const RefillMedicineScreen = ({ navigation}) => {
  const [listData, setListData] = useState([]);
  // const [focused, setFocused] = useState(false);

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

    let res = dataFromFirebase.map((value, index) => {value.focused = false; value.id = index; return value})

    console.log(res)
    
    setListData(res)
  }
  
  function changeToInput(id){
    console.log(id)
    let found = listData.findIndex(element => element.id == id)
    let ch = listData
    ch[found].focused = !ch[found].focused
    // ch.map((value) => console.log(value.focused + ' '))
    
    setListData(ch)
  }

  function generateMedicine(value, index) {
    console.log(value.focused + " ")

    return( 
      value.active ?
      <View key={index} style={[styles.medic, {flexDirection: 'row'}]} >
        <View style={{width: '20%', height: '100%'}}>
        <Image
                source={require("../assets/medicine.png")}
                style={{
                  width: '75%',
                  height: '90%',
                }}
              />
              </View>
        <View style={{width: '60%', height: '100%',}}>
        <Text>{value.name}</Text>
        <Text style={{opacity: 0.4}}>{value.dosage} tabs | {value.number} times {'\n'}Detail : {value.detail}</Text></View>
       
        {!value.focused ?
        <TouchableOpacity style={{width:'100%', height:'100%', justifyContent:'center'}} onPress={() => {changeToInput(value.id)}}>
          <AntDesign name="pluscircleo" size={36} color="black" />
        </TouchableOpacity>
        :<TouchableOpacity style={{width:'100%', height:'100%', justifyContent:'center'}} onPress={() => {changeToInput(value.id)}}>
        <AntDesign name="adduser" size={24} color="black" />
      </TouchableOpacity>}
        
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

export default RefillMedicineScreen ;
