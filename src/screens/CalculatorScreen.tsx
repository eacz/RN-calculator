import React, { useState, useRef } from 'react'
import { View, Text } from 'react-native'
import ButtonCalc from '../components/ButtonCalc';
import styles from '../theme/appTheme';

enum Operators {
  add, subtract, multiply, division
}

const CalculatorScreen = () => {
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');
  const lastOperation = useRef<Operators>()

  const clear = () => {
    setNumber('0');
  }

  const handleNumberChange = (numberText: string) => {
    //no aceptar mas de un punto
    if(number.includes('.') && numberText === '.') return;

    //en caso de que empiece con 0
    if(number.startsWith('0') || number.startsWith('-0')){
      //la entrada es un punto decimal 
      if(numberText === '.'){
        setNumber(number + numberText)

      }
      //la entrada es un en un numero que ya tiene punto decimal
      else if(numberText === '0' && number.includes('.')){
        setNumber(number + numberText)
      }
      // evaluar que es diferente de 0 y no tiene punto
      else if(numberText !== '0' && !number.includes('.')){
        setNumber(numberText)
      } 
      //evitar multiples 0 sin punto decimal
      else if (numberText === '0' && !number.includes('.')){
        setNumber(number)
      } 
      else {
        setNumber(number + numberText)
      } 

    } else {
      setNumber(number + numberText)
    }

  }

  const deleteLastNumber = () => {
    if(number.includes('-') && number.length === 2){
      setNumber('0')
    } else if(number.length === 1){
      setNumber('0')
    } else {
      setNumber(number.substring(0, number.length-1))
    }
  }

  const negativePositive = () => {
    if(number.includes('-')){
      setNumber(number.replace('-',''))
    } else {
      setNumber('-'+number)
    }
  }

  const changeNumberToPrevious = () => {
    if(number.endsWith('.')){
      setPreviousNumber(number.slice(0,-1))
    } else {
      setPreviousNumber(number)
    }
    setNumber('0')
  }

  const division = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.division;
  }
  const multiply = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.multiply;
  }
  const subtract = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.subtract;
  }
  const add = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.add;
  }

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.littleResult}>{previousNumber}</Text>
      <Text 
      style={styles.result}
      numberOfLines={ 1 }
      adjustsFontSizeToFit
      >
        {number}
      </Text>

      <View style={styles.row}>
        <ButtonCalc color="black" backgroundColor="#9b9b9b" text="C" action={clear} />
        <ButtonCalc color="black" backgroundColor="#9b9b9b" text="+/-" action={negativePositive} />
        <ButtonCalc color="black" backgroundColor="#9b9b9b" text="del" action={deleteLastNumber} />
        <ButtonCalc color="white" backgroundColor="#ff9427" text="/" action={division} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="7" action={handleNumberChange}/>
        <ButtonCalc text="8" action={handleNumberChange}/>
        <ButtonCalc text="9" action={handleNumberChange}/>
        <ButtonCalc color="white" backgroundColor="#ff9427" text="x" action={multiply} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="4" action={handleNumberChange} />
        <ButtonCalc text="5" action={handleNumberChange} />
        <ButtonCalc text="6" action={handleNumberChange} />
        <ButtonCalc color="white" backgroundColor="#ff9427" text="-" action={subtract} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="1" action={handleNumberChange} />
        <ButtonCalc text="2" action={handleNumberChange} />
        <ButtonCalc text="3" action={handleNumberChange} />
        <ButtonCalc color="white" backgroundColor="#ff9427" text="+" action={add} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="0" width action={handleNumberChange}  />
        <ButtonCalc text="." action={handleNumberChange} />
        <ButtonCalc color="white" backgroundColor="#ff9427" text="=" action={clear} />
      </View>
      {/* #2d2d2d2 gris osc #ff9427 naranja osc */}

    </View>
  )
}

export default CalculatorScreen
