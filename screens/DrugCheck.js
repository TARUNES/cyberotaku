import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity ,ScrollView,Alert} from 'react-native'
import React, { useState } from 'react'
import { endpoint, API_KEY } from '../config/DrugConfig';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconI from 'react-native-vector-icons/Feather';

const DrugCheck = () => {
    const [pillname, setPillname] = useState('');
    const [purpose, setPurpose] = useState([]);
    const [indicationsAndUsage, setIndicationsAndUsage] = useState([]);
    const [warnings, setWarnings] = useState([]);

    async function services() {
        try {
            const response = await fetch(`https://api.fda.gov/drug/label.json?search=openfda.brand_name:${pillname}&limit=1`, {
                headers: {
                    'X-API-KEY': API_KEY
                }
            });

            if (response.ok) {
                const data = await response.json();
                const results = data.results[0];

                if (results) {
                    setPurpose(results.purpose || []);
                    setIndicationsAndUsage(results.indications_and_usage || []);
                    setWarnings(results.warnings || []);
                } else {
                    console.error('No results found');
                    Alert.alert('No results found');
                }
            } else {
                console.error('Error fetching data:', response.status);
                Alert.alert('Error fetching data', `Status: ${response.status}`);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            Alert.alert('Error fetching data', 'An error occurred while fetching data.');
        }
    }

    return (
        <View style={styles.container}>
            <View >
        <Text style={{ fontSize: 25, color: 'black' }}>Check About Pill</Text>

      </View>
            <View
                style={{
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    paddingLeft: 10,
                    borderRadius: 10,
                    marginTop: 20,
                    height: 50,
                }}>
                <Icon name={'pill'} color={'#1f2120'} style={{ fontSize: 20, marginTop: 13 }} />
                <TextInput
                    placeholder="Enter The Pill Name"
                    placeholderTextColor={'black'}
                    style={styles.txtinp}
                    textAlign="left"
                    onChangeText={text => setPillname(text)}></TextInput>
            </View>
            <TouchableOpacity onPress={services} style={{ height: 30, width: 90, backgroundColor: '#A294F6', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 20, alignSelf: 'flex-end', marginTop: 10,marginBottom:10 }}>
                <Text style={{ color: 'black', marginRight: 5, fontSize: 16, fontWeight: '500' }}>Search</Text>
                <IconI name='search' color={'black'} size={16}></IconI>
            </TouchableOpacity>
<ScrollView>
            <Text style={{ fontSize: 20, color: 'black', fontWeight: '800' }}>Purpose:</Text>
            {purpose.map((item, index) => (
                <Text style={{ fontSize: 15, color: '#0f0d0d', fontWeight: '400',marginBottom:20 }} key={index}>{item}</Text>
            ))}
            <Text style={{ fontSize: 20, color: 'black', fontWeight: '800' }}>Indications and Usage:</Text>
            {indicationsAndUsage.map((item, index) => (
                <Text style={{ fontSize: 15, color: '#0f0d0d', fontWeight: '400',marginBottom:20 }} key={index}>{item}</Text>
            ))}
            <Text style={{ fontSize: 20, color: 'black', fontWeight: '800' }}>Warnings:</Text>
            {warnings.map((item, index) => (
                <Text style={{ fontSize: 15, color: '#0f0d0d', fontWeight: '400',marginBottom:20 }} key={index}>{item}</Text>
            ))}
            </ScrollView>
        </View>
    )
}

export default DrugCheck;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(186, 178, 235,0.4)',
        padding: 20
    },
    txtinp: {
        // flex: 1,
        paddingLeft: 11,
        color: 'black',
        backgroundColor: 'white',
        // width:'200'
    }
});
