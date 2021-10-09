import { View } from 'react-native';
import styled, { css } from 'styled-components/native';
import { COLORS } from '../../constants/colors.enum';

export const PlaceholderLabel = styled.Text<{
  isFocused: boolean;
  isFilled: boolean;
}>`
  color: ${COLORS.GRAY};
  text-align: center;
  width: 100%;
  z-index: -1;
  ${({ isFocused, isFilled }) => {
    return isFocused || isFilled
      ? css`
          transform: translateY(-0px);
          font-size: 13px;
        `
      : css`
          transform: translateY(25px);
          font-size: 20px;
        `;
  }}
`;

export const LabeledInput = styled.TextInput<{ isFocused: boolean }>`
  width: 260px;
  height: 40px;
  border-bottom-width: 2px;
  text-align: center;
  border-bottom-color: ${({ isFocused }) =>
    isFocused ? COLORS.EMERALD_GREEN : COLORS.GRAY}
  padding: 8px;
  font-size: 20px;
`;

export const StyledView = styled(View)`
  margin-top: 200px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
