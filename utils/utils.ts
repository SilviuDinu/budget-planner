import moment, { Moment } from 'moment';

const weekends = [6, 7];

export const getAmountPerDay = (
  total: string,
  time: Moment,
  options?: any
): number => {
  const { excludeWeekends = false } = options || {};
  const totalDays = excludeWeekends
    ? getBusinessDays(time)
    : time.daysInMonth();
  return Math.floor(parseInt(total) / totalDays);
};

export const getBusinessDays = (time: Moment): number => {
  const totalDays = time.daysInMonth();
  const currentDay = moment(time);
  let businessDays = totalDays;
  let isCorrectMonth;
  while (totalDays > 0) {
    isCorrectMonth = currentDay.add(1, 'days').month() === time.month();
    if (isCorrectMonth && weekends.indexOf(currentDay.isoWeekday()) > -1) {
      businessDays--;
    }
  }
  return businessDays;
};
