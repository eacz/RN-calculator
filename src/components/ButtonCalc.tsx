import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface Props {
  text: string,
  backgroundColor?: string,
  color?: string,
  width?: boolean,
  action: (numberText: string) => void
}

const ButtonCalc = ({text, color='white', backgroundColor='#2d2d2d', width = false, action}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => action(text)}>
      <View style={{...styles.button, backgroundColor, width: width ? 180 : 80}}>
        <Text style={{...styles.buttonText, color}}> 
        {text} 
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: '#2d2d2d'
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '300',
    fontSize: 30,
    color: 'white'
  }
});

export default ButtonCalc
