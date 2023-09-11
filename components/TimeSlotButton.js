import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const TimeSlotButton = ({ timeSlot, onPress, selected }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: selected ? '#A294F6' : 'white',
        },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: selected ? 'white' : 'black' }]}>{timeSlot}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: '40%', // Adjust the height as needed
    width: '20%', // Adjust the width as needed
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginHorizontal: '1%', // Adjust the margin as needed
    borderWidth: 1,
    borderColor: '#A294F6',
  },
  text: {
    fontSize: 10,
  },
});

export default TimeSlotButton;
