import React, {Component} from "react";
import { View, Text, Button, StyleSheet, AppRegistry } from "react-native";
import moment from "moment";
import CalendarStrip from "react-native-calendar-strip";

const CalendarScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <CalendarStrip
                    calendarAnimation={{type: 'sequence', duration: 30}}
                    daySelectionAnimation={{type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'white'}}
                    style={{height: 100, paddingTop: 20, paddingBottom: 10}}
                    calendarHeaderStyle={{color: 'white'}}
                    calendarColor={'#7743CE'}
                    dateNumberStyle={{color: 'white'}}
                    dateNameStyle={{color: 'white'}}
                    highlightDateNumberStyle={{color: 'yellow'}}
                    highlightDateNameStyle={{color: 'yellow'}}
                    disabledDateNameStyle={{color: 'grey'}}
                    disabledDateNumberStyle={{color: 'grey'}}
                    datesWhitelist={datesWhitelist}
                    datesBlacklist={datesBlacklist}
                    iconLeft={require('./img/left-arrow.png')}
                    iconRight={require('./img/right-arrow.png')}
                    iconContainer={{flex: 0.1}}
                /> */}
    </View>
  );
};

export default CalendarScreen ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
