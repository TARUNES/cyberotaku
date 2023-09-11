import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';


const DateButton = ({ dayOfWeek, dayOfMonth, onPress, selected }) => {
  const buttonStyle = {
    height: '55%',
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginHorizontal: '3%',
    backgroundColor: selected ? '#A294F6' : 'white',
    borderColor: '#A294F6',
    borderWidth: selected ? 0 : 1,
  
  };

  const textStyle = {
    fontSize: 15,
    color: selected ? 'white' : 'black',
  };

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{dayOfWeek}</Text>
      <Text style={textStyle}>{dayOfMonth}</Text>
    </TouchableOpacity>
  );
};

export default DateButton;
