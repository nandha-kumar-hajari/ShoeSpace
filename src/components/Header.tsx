import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {customWidth} from './Styles';
import {BackIcon} from '../assets/images';

interface HeaderProps{
    screenName?:string
    onClickBack?:()=>void
}
export const Header:React.FC<HeaderProps> =({screenName,onClickBack}:HeaderProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        height: customWidth(50),
        alignItems: 'center',
        paddingHorizontal: customWidth(14),
        marginVertical: customWidth(22),
      }}>
      <TouchableOpacity onPress={onClickBack}>
        <Image
          source={BackIcon}
          style={{height: customWidth(35), width: customWidth(35)}}
        />
      </TouchableOpacity>
      <Text
        numberOfLines={1}
        style={{
          color: '#1A202C',
          fontFamily: 'Lato-Regular',
          fontSize: 17,
          marginLeft: customWidth(15),
          maxWidth: customWidth(340),
        }}>
        {screenName}
      </Text>
    </View>
  );
}
export default Header