import React from 'react';
import { Text, View } from 'react-native';

import CustomDatePicker from './components/datepicker';

const App = () => {
  return(
    <View style={{flex: 1, marginTop: 50}}>
      <View style={{marginHorizontal: 20}}>
        <Text>Week Ending</Text>
        <CustomDatePicker 
          textStyle={{
            paddingVertical: 15,
            paddingHorizontal: 10,
            borderColor: 'grey',
            borderWidth: 1,
          }}
          defaultDate="2021-01-01"
          onDateChange={(value) => console.log('Date Changed: ' + value)}
        />
      </View>
    </View>
  );
};

export default App;