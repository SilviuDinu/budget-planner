import { StatusBar } from 'expo-status-bar';
import moment, { Moment } from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { Text } from 'react-native';
import CalendarView from './components/CalendarView/CalendarView';
import InputField from './components/InputField/InputField';
import { ContainerView, MainView, StyledScrollView } from './styles';
import { getAmountPerDay } from './utils/utils';

export default function App() {
  const [budgetAmount, setBudgetAmount] = useState<string>('');
  const [amountPerDay, setAmountPerDay] = useState<any>('');
  const currentMoment = useRef<Moment>(moment());

  useEffect(() => {
    const amount = getAmountPerDay(budgetAmount, currentMoment.current);
    setAmountPerDay(amount);
  }, [budgetAmount]);

  return (
    <ContainerView>
      <StyledScrollView keyboardShouldPersistTaps="never">
        <MainView>
          <InputField
            value={budgetAmount}
            onChangeValue={setBudgetAmount}
            keyboardType={'numeric'}
          />
          {!!amountPerDay && (
            <>
              <Text style={{ marginTop: 32 }}>
                Amount to spend per day: {amountPerDay}
              </Text>
            </>
          )}
          <CalendarView></CalendarView>
        </MainView>
      </StyledScrollView>
      <StatusBar style="auto" />
    </ContainerView>
  );
}
