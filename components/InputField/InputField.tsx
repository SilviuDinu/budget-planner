import React, { useCallback, useState } from 'react';
import { LabeledInput, PlaceholderLabel, StyledView } from './styles';

export default React.memo(function InputField(props: any) {
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
  );
});
