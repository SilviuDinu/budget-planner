import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputField from './components/InputField';

export default function App() {
  const [budgetAmount, setBudgetAmount] = useState<string>('');

  useEffect(() => {
    console.log(budgetAmount);
  });

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <InputField
          value={budgetAmount}
          onChangeValue={setBudgetAmount}
          keyboardType={'numeric'}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  main: {
    flex: 1,
    width: '100%',
  }
});
