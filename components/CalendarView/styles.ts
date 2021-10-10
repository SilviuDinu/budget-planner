import { Text, View } from 'react-native';
import styled, { css } from 'styled-components/native';
import { COLORS } from '../../constants/colors.enum';

export const CenteredView = styled.View<{ column?: boolean; wrap?: boolean }>`
  flex: 1;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 18px;

  ${({ column }) =>
    column
      ? css`
          flex-direction: column;
        `
      : css`
          flex-direction: row;
        `}

  ${({ wrap }) =>
    wrap
      ? css`
          flex-wrap: wrap;
        `
      : css`
          flex-wrap: nowrap;
        `}
`;

export const RowLayoutView = styled(View)`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const ColumnLayoutView = styled(View)`
  flex: 1;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const CalendarHeadText = styled(Text)`
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex: 1;
`;

export const CalendarBodyText = styled(Text)`
  font-size: 18px;
  margin-top: 32px;
  flex: 1 0 14%; /* explanation below */
  text-align: center;
`;
