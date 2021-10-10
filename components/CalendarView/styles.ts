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
  padding: 8px;
  margin: 8px;
`;

export const ColumnLayoutView = styled(View)`
  flex: 1;
  flex-direction: column;
  width: 100%;
  padding: 8px;
  margin: 8px;
`;

export const CalendarHeadText = styled(Text)`
  margin-right: 8px;
  font-size: 18px;
  flex: 1;
`;

export const CalendarBodyText = styled(Text)`
  font-size: 18px;
  margin-top: 16px;
  flex: 1 0 14%; /* explanation below */
  flex-grow: 1;
  width: 100%;
`;
