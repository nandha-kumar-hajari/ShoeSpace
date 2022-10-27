import React from 'react';
import {TextInput} from 'react-native-paper';
import {customWidth} from './Styles';

interface TextFieldProps {
  label: string;
  value: string;
  maxLength: number;
  placeholder?: string;
  onChangeText(): void;
}
export const TextField: React.FC<TextFieldProps> = ({
  label,
  value,
  placeholder,
  onChangeText,
  maxLength,
}: TextFieldProps) => {
  return (
    <TextInput
      style={{
        height: customWidth(50),
        width: '86%',
        fontSize: 13,
        marginVertical: customWidth(16),
      }}
      label={label}
      maxLength={maxLength}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      mode="outlined"
    />
  );
};

export default TextField;
