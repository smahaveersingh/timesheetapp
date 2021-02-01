import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Constants from 'expo-constants';
import * as SQLite from 'expo-sqlite';
import Header from './components/Header';
import CalendarPicker from 'react-native-calendar-picker';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
   return (
      <View style={styles.container}>
        <Header title="Timesheets" />
        <View style={styles.flexRow}>
          <Text style={styles.heading}>Week Ending</Text>
        </View>
        <View>
          <Text>{ startDate }</Text>
        </View>
        <CalendarPicker
          onDateChange={this.onDateChange}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: 'black',
    paddingTop: 26,
    paddingLeft: 10,
  },
  flexRow: {
    flexDirection: "row"
  },
  input: {
    borderColor: "#4630eb",
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    height: 48,
    width: 68,
    margin: 16,
    padding: 8
  },
  listArea: {
    backgroundColor: "#f0f0f0",
    flex: 1,
    paddingTop: 16
  },
  sectionContainer: {
    marginBottom: 16,
    marginHorizontal: 16
  },
  sectionHeading: {
    fontSize: 18,
    marginBottom: 8
  },
  calender: {
    paddingTop: 96,
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: -240
  },
  showdate: {
    fontSize: 15,
    color: 'black',
    paddingTop: 56,
    paddingLeft: 10,
    marginLeft: -26
  }
});