import { ScrollView, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import { COLORS } from '../constants/colors.enum';
import styled, { css } from 'styled-components/native';

const PlaceholderLabel = styled.Text<{ isFocused: boolean; isFilled: boolean }>`
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

const LabeledInput = styled.TextInput<{ isFocused: boolean }>`
  width: 260px;
  height: 40px;
  border-bottom-width: 2px;
  text-align: center;
  border-bottom-color: ${({ isFocused }) =>
    isFocused ? COLORS.EMERALD_GREEN : COLORS.GRAY}
  padding: 8px;
  font-size: 20px;
  flex: 1;
`;

const StyledView = styled(View)`
  margin-top: 200px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function InputField(props: any) {
  const { value, onChangeValue } = props || {};
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isFilled, setIsFilled] = useState<boolean>(!!value);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!value);
  }, [value]);

  const handleInputChange = useCallback((text: any) => {
    onChangeValue(text);
    setIsFilled(!!value);
  }, []);

  return (
    <ScrollView keyboardShouldPersistTaps="never">
      <StyledView>
        <PlaceholderLabel isFocused={isFocused} isFilled={isFilled}>
          {'Set your budget for the month'}
        </PlaceholderLabel>
        <LabeledInput
          isFocused={isFocused}
          value={value}
          onChangeText={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...props}
        ></LabeledInput>
      </StyledView>
    </ScrollView>
  );
}
