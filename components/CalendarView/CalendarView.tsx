import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { weekdays } from '../../constants/weekdays';
import {
  CalendarBodyText,
  CalendarHeadText,
  CenteredView,
  RowLayoutView,
} from './styles';

export default React.memo(function CalendarView(props: any) {
  const { dates, markedDates, amountPerDay } = props || {};

  const getCorrespondingDays = (weekday?: string): string[] => {
    const now = moment();
    const totalDaysInMonth = now.daysInMonth();
    const firstDayOfMonthIndex = now.startOf('month').weekday();
    const lastDayOfMonthIndex = now.endOf('month').weekday();
    let dates = [];
    for (let i = 0; i < totalDaysInMonth; i++) {
      dates.push(
        now
          .startOf('month')
          .day(i + now.weekday())
          .format('D')
      );
    }
    for (let i = 0; i < firstDayOfMonthIndex - 1; i++) {
      dates.unshift('');
    }
    for (let i = 0; i < lastDayOfMonthIndex - 1; i++) {
      dates.push('');
    }
    return dates;
  };

  return (
    <CenteredView style={{marginTop: 64}}>
      <CenteredView>
        <CenteredView column wrap>
          <RowLayoutView>
            <CenteredView wrap>
              {weekdays.map((weekday: string, index: number) => (
                <CalendarHeadText key={index}>
                  {weekday?.substring(0, 3)}
                </CalendarHeadText>
              ))}
            </CenteredView>
          </RowLayoutView>
          <RowLayoutView>
            <CenteredView wrap>
              {getCorrespondingDays().map((day: string, idx: number) => {
                console.log(day);
                return <CalendarBodyText key={idx}>{day}</CalendarBodyText>;
              })}
            </CenteredView>
          </RowLayoutView>
        </CenteredView>
      </CenteredView>
    </CenteredView>
  );
});
