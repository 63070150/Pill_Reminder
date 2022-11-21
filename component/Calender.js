import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button } from "react-native";
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

const Calender = () => {
  let datesWhitelist = [{
    start: moment(),
    end: moment().add(12, 'months')  // total 4 days enabled
  }];
  // console.log(datesWhitelist)
  // let datesBlacklist = [ moment().add(1, 'days') ]; // 1 day disabled

  return(<View style={styles.container}>
    <CalendarStrip
      scrollable
      style={{height:100, paddingTop: 20, paddingBottom: 10}}
      calendarColor={"#1aadbb"}
      calendarHeaderStyle={{color: '#70717b'}}
      dateNumberStyle={{color: 'white'}}
      dateNameStyle={{color: 'white'}}
      iconContainer={{flex: 0.1}}
      datesWhitelist={datesWhitelist}
      // datesBlacklist={datesBlacklist}
      onDateSelected={(date) => console.log(date)}
    />
  </View>)
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'black', width: '100%',justifyContent:"flex-start"}
});

export default Calender;