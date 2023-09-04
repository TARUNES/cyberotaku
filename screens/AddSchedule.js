import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import CheckBox from 'react-native-check-box'
import DateTimePicker from '@react-native-community/datetimepicker';
// import DatePicker from "react-datepicker";
const AddSchedule = () => {

    const [pillname, setPillname] = useState('')
    const [intake, setIntake] = useState()
    const [no_of_days, setNoDays] = useState()
    const [Checked, isChecked] = useState(false);
    const [startDate, setStartDate] = useState(new Date());


    return (
        <View style={styles.container}>
            <Text>AddSchedule</Text>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: '700', color: 'black', width: '85%', margin: 5 }}> Pill Name:</Text>
                <TextInput style={{ backgroundColor: 'white', color: 'black', width: '85%', borderRadius: 10, }}></TextInput>
            </View >
            <View style={{ paddingLeft: 30, marginTop: 20 }}>
                <CheckBox
                    style={{}}
                    onClick={() => {
                        isChecked(!(Checked))

                    }}
                    isChecked={Checked}
                    rightText={"Morning"}
                    rightTextStyle={{ color: 'black', fontSize: 20 }}
                />
                <CheckBox
                    style={{}}
                    onClick={() => {
                        isChecked(!(Checked))

                    }}
                    isChecked={Checked}
                    rightText={"Evening"}
                    rightTextStyle={{ color: 'black', fontSize: 20 }}
                />
                <CheckBox
                    style={{}}
                    onClick={() => {
                        isChecked(!(Checked))

                    }}
                    isChecked={Checked}
                    rightText={"Night"}
                    rightTextStyle={{ color: 'black', fontSize: 20 }}
                />
            </View>
            {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
            {/* <RNDateTimePicker minuteInterval={10} /> */}
        </View>
    )
}

export default AddSchedule

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#baf7c2'
    }
})