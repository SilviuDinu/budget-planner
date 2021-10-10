import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { weekdays } from '../../constants/weekdays';
import {
  CalendarBodyText,
  CalendarHeadText,
  CenteredView,
  ColumnLayoutView,
  RowLayoutView,
} from './styles';

export default React.memo(function CalendarView(props: any) {
  const { dates, markedDates, amountPerDay } = props || {};

  const getCorrespondingDays = (weekday?: string): string[] => {
    const now = moment('2020-01-15');
    const totalDaysInMonth = now.daysInMonth();
    const firstDayOfMonthIndex = now.startOf('month').weekday();
    // console.log(now.startOf('month').day(5).format('LL'));
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
    return dates;
  };

  return (
    <CenteredView>
      <CenteredView style={{ marginTop: 64 }}>
        <CenteredView column wrap>
          <RowLayoutView>
            <CenteredView>
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
