import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { customWidth, shadowStyles } from './Styles';
// import {
//     MaterialIndicator
// } from 'react-native-indicators';
// import DocumentPicker from 'react-native-document-picker';
// import colors from './colors';

interface ButtonProps {
    disabled?:boolean
    onPress?:()=>void
    text:string
    buttonStyle?:any
    textStyle?:any

}

export const Button = ({disabled,onPress,text,buttonStyle,textStyle}:ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      style={{
        backgroundColor: disabled ? "grey" : '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginVertical: 10,
        paddingHorizontal: 30,
        paddingVertical: 13,
        elevation:2,
        // ...shadowStyles,
        ...buttonStyle,
      }}>
      {false ? (
        // <MaterialIndicator color="white" size={props.indicatorSize} />
        null
      ) : (
        <>
          <Text
            style={{
              color: '#2F2E42',
              fontFamily: 'Lato-Bold',
              
              fontSize:customWidth(20),
              ...textStyle,
            }}>
            {text}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
