import React, {useState} from 'react';
import { Modal, Text, View, StyleSheet, TouchableHighlight, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';


const CustomDatePicker = (props) => {
    const {textStyle, defaultDate} = props;
    const [date, setDate] = useState(moment(defaultDate)); //create variable's for storing date
    const [show, setShow] = useState(false);    //create variable to show and hide DatePicker (set it to false by default)
    
    const onChange = (e, selectedDate) => {    //onChange function to set date to selected date
        setDate(moment(selectedDate));
    }

    const onAndroidChange = (e, selectedDate) => {   //instead of events being individual, we set it to fire from onAndroidChnage
        setShow(false);
        if(selectedDate) {
            setDate(moment(selectedDate));
            props.onDateChange(selectedDate);
        }
    }

    const onCancelPress = () => {               //when cancel is pressed, we have to set the date to default date
        setDate(moment(defaultDate));
        setShow(false);
    }

    const onDonePress = () => {                 //when done is pressed, we have to set the date to the selected date
        props.onDateChange(date);
        setShow(false);
    }

    const renderDatePicker = () => {
        return (
            <DateTimePicker 
            timeZoneOffsetInMinutes={0} //defalut device timezone
            value = {new Date(date)}
            mode="date"
            minimumDate={new Date(moment().subtract(10, 'years').format('YYYY-MM-DD'))}  //10 years before current date
            maximumDate={new Date(moment().add(10, 'years').format('YYYY-MM-DD'))}       //10 years from current date
            onChange={Platform.OS === 'ios' ? onChange : onAndroidChange}
        />
        );
    }

    return (
        <TouchableHighlight
            activeOpacity= {0}
            onPress={() => setShow(true)}>
                <View>
                    <Text style={textStyle}>{moment().format('YYYY-MM-DD')}</Text>

                    {Platform.OS !== 'ios' && show && renderDatePicker()}

                    {Platform.OS === 'ios' && (
                    <Modal                      //Modal only for IOS
                        transparent={true}
                        animationType='slide'
                        visible={show}
                        supportedOrientations={['portrait']}
                        onRequestClose={() => setShow(false)}>
                        <View style={{flex: 1}}>
                            <TouchableHighlight  //This part of TouchableHighlight is essentially for the whole screen
                                style={{
                                    flex: 1,
                                    alignItems: 'flex-end',
                                    flexDirection: 'row',
                                }}
                                activeOpacity={1}
                                visible={show}
                                onPress={() => setShow(false)}>
                                <TouchableHighlight   //This part is going to be positioned at the bottom
                                underlayColor={'#FFFFFF'}
                                style={{
                                    flex: 1,
                                    borderTopColor: '#E9E9E9',
                                    borderTopWidth: 1,
                                }}
                                onPress={() => console.log('datePicker Clicked')}>

                                    <View style ={{
                                        backgroundColor: '#FFFFFF',
                                        height: 256,
                                        overflow: 'hidden',
                                    }}>
                                        <View style={{ marginTop: 20}}>
                                            {renderDatePicker()}
                                        </View>
                                        
                                        <TouchableHighlight             //we need our cancel button!
                                            underlayColor={'transparent'}
                                            onPress={onCancelPress}
                                            style={styles.btnTxt, styles.btnCancel}> 
                                            <Text>Cancel</Text>
                                        </TouchableHighlight>

                                        <TouchableHighlight             //we need our done button!
                                            underlayColor={'transparent'}
                                            onPress={onDonePress}
                                            style={styles.btnTxt, styles.btnDone}> 
                                            <Text>Done</Text>
                                        </TouchableHighlight>

                                    </View>

                                </TouchableHighlight>
                            </TouchableHighlight>
                        </View>
                    </Modal>
                    )}
                </View>
        </TouchableHighlight>
    )
};

CustomDatePicker.defaultProps = {
    textStyle: {},
    defaultDate: moment(),
    onDateChange: () => {},
};

const styles = StyleSheet.create({
    btnTxt: {
        position: 'absolute',
        top: 0,
        height: 42,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnCancel: {
        left: 0,
    },
    btnDone: {
        right: 0,
    },
})

export default CustomDatePicker;