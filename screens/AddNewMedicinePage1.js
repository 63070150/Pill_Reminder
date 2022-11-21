import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, TouchableWithoutFeedback, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import DatePicker from 'react-native-date-picker'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import db from "../database/firebaseDB";
import { addDoc, collection } from "firebase/firestore";

const HEIGHT = Dimensions.get("window").height
const WIDTH = Dimensions.get("window").width


const AddNewMedicinePage1 = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      dosage: 1,
      tabs: 1
    },
  });
  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Before meal', value: 'Before meal'},
    {label: 'After meal', value: 'After meal'}
  ]);
  let [meal, setMeal] = useState()

  let [listDate, setListDate]  = useState([]) // Component DataTimePicker
  let [selectDate, setSelectDate] = useState([])
  // console.log(listDate)

  const onChange2 = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    console.log(currentDate)
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(false);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const onSubmit = async (data) => {
    let dates = []
    dates.push(date)
    try{
      let docRef
        docRef = await addDoc(collection(db,"Medicine"),{
          name: data.name,
          dosage: data.dosage,
          quantity: data.tabs,
          active: true,
          detail: meal,
          notification: true,
          time: dates,
          number: dates.length,
    })
    console.log(docRef.id)
    
    }catch(error){
      console.error(error)
    }
  };
//   const [date, setDate] = useState(new Date())
//   const [open, setOpen] = useState(false)

  // function onPress(){
  //   let add = [<View style={{margin: '1%'}} key={Math.random()*10000}><DateTimePicker
  //     testID="dateTimePicker"
  //     value={date}
  //     mode={'time'}
  //     is24Hour={true}
  //     onChange={onChange2}
  //   /></View>]
  //   let dates = listDate.concat(add)


  //   setListDate(dates)
    
  // }

  return (
    <View>
      <Text style={{ padding: "5%" }}>Enter the name of your medicine </Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputfiled}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
      />
      {/* {errors.firstName && <Text>This is required.</Text>} */}
      <Text style={{ padding: "5%" }}>
        How many caps do you need to take at once
      </Text>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputfiled}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType = 'numeric'
          />
        )}
        name="tabs"
      />
        {/* <Button title="Open" onPress={() => setOpen(true)} /> */}
        {/* <Button onPress={showDatepicker} title="Show date picker!" />
      <Button onPress={showTimepicker} title="Show time picker!" />
      <Text>selected: {date.toLocaleString()}</Text> */}
      <Text style={{ padding: "5%" }}>
        How many tabs of medicine?
        
      </Text>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputfiled}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType = 'numeric'
          />
        )}
        name="dosage"
      />
      <Text style={{ padding: "5%" }}>
        Add time when you need to take the medicine
      </Text>
      
      <View style={{alignSelf:'flex-start', paddingLeft: "10%"}}>
        
      <DateTimePicker 
          testID="dateTimePicker"
          value={date}
          mode={'time'}
          onChange={onChange2}
        />
      </View>
      <Text style={{ padding: "5%" }}>
        Before Meal / After Meal
      </Text>
          <View style={{width: '100%', height: '15%', padding: '5%', zIndex: 1}}>
      <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onSelectItem={(value) => setMeal(value.value)}
    />
       </View>
        {/* <TouchableWithoutFeedback onPress={() => onPress()}>
          <View>
            <Ionicons name="add-circle-outline" size={50} color="black" />
          </View> 
        </TouchableWithoutFeedback>
        <ScrollView style={{height: '10%'}}>
        
          <View style={{flex:1, flexDirection:'row', flexWrap: 'wrap'}}>{listDate}</View>
        </ScrollView> */}
        {/* {listDate} */}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />

      
    </View>
  );
};


export default AddNewMedicinePage1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  inputfiled: {
    width: "90%",
    height: 55,
    borderWidth: 2.5,
    alignSelf: "center",
    borderColor: "#00000033",
    borderRadius: 5,
  },
});
