import React from 'react';
import {TextInput} from 'react-native-paper';
import {customWidth} from './Styles';

interface TextFieldProps {
  label: string;
  value: string;
  maxLength: number;
  placeholder?: string;
  multiLine?:boolean;
  numberOfLines?:number
  
  onChangeText(): void;
}
export const TextField: React.FC<TextFieldProps> = ({
  label,
  value,
  placeholder,
  onChangeText,
  multiLine,
  numberOfLines,
  maxLength,
}: TextFieldProps) => {
  return (
    <TextInput
      style={{
        width: '86%',
        fontSize: 13,
        marginVertical: customWidth(16),
      }}
      label={label}
      maxLength={maxLength}
      multiline={multiLine}
      numberOfLines={numberOfLines}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      mode="outlined"
    />
  );
};

export default TextField;
