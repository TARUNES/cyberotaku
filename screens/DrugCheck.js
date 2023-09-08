import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import { endpoint, API_KEY } from '../config/DrugConfig';

const DrugCheck = () => {
    const [purpose, setPurpose] = useState([]);
    const [indicationsAndUsage, setIndicationsAndUsage] = useState([]);
    const [warnings, setWarnings] = useState([]);

    async function services() {
        try {
            const response = await fetch(`https://api.fda.gov/drug/label.json?search=openfda.brand_name:dolo&limit=1`, {
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
                }
            } else {
                console.error('Error fetching data:', response.status);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <View>
            <Text>DrugCheck</Text>
            <Button onPress={services} title='Fetch Data' />
            <Text>Purpose:</Text>
            {purpose.map((item, index) => (
                <Text key={index}>{item}</Text>
            ))}
            <Text>Indications and Usage:</Text>
            {indicationsAndUsage.map((item, index) => (
                <Text key={index}>{item}</Text>
            ))}
            <Text>Warnings:</Text>
            {warnings.map((item, index) => (
                <Text key={index}>{item}</Text>
            ))}
        </View>
    )
}

export default DrugCheck;

const styles = StyleSheet.create({});
