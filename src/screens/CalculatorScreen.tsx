import React from 'react'
import { View, Text } from 'react-native'
import ButtonCalc from '../components/ButtonCalc';
import useCalculator from '../hook/useCalculator';
import styles from '../theme/appTheme';


const CalculatorScreen = () => {
  const  {
    number,
    previousNumber,
    clear, 
    handleNumberChange,
    deleteLastNumber,
    negativePositive,
    division,
    multiply,
    subtract,
    add,
    calculate } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      { 
        (previousNumber !== '0') && (<Text style={styles.littleResult}>{previousNumber}</Text>)
      }
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
        <ButtonCalc color="white" backgroundColor="#ff9427" text="=" action={calculate} />
      </View>
    </View>
  )
}

export default CalculatorScreen
