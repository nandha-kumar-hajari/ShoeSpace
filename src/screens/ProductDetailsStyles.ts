import { customWidth } from './../components/Styles';
import { ImageStyle, StyleSheet, ViewStyle, TextStyle } from 'react-native';
interface Style {
  mainViewStyle: ViewStyle;
  imageStyle:ImageStyle;
  brandTextStyle:TextStyle;
  productNameStyle:TextStyle
  descHeadingStyle:TextStyle
  descTextStyle:TextStyle
  bottomViewStyle:ViewStyle
}
export default StyleSheet.create<Style>({
  mainViewStyle: {flex: 1,  backgroundColor: '#1A202C'},
  imageStyle:{
    height: customWidth(330),
    width: customWidth(330),
    alignSelf: 'center',
  },
  brandTextStyle:{
    fontFamily: 'Lato-Bold',
    margin: customWidth(12),
    color: '#fff',
    fontSize: 26,
  },
  productNameStyle:{
    fontFamily: 'Lato-Regular',
    marginHorizontal: customWidth(12),
    fontSize: 16,
    color: '#fff',
  },
  descHeadingStyle:{
    fontFamily: 'Lato-Bold',
    marginTop: customWidth(25),
    marginHorizontal: customWidth(12),
    fontSize: 22,
    color: '#fff',
  },
  descTextStyle:{
    fontFamily: 'Lato-Regular',
    marginTop: customWidth(4),
    marginHorizontal: customWidth(12),
    fontSize: 14,
    color: '#fff',
  },
  bottomViewStyle:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 1,
    backgroundColor: '#f2f2f2',
    borderRadius: 3,
    alignItems: 'center',
    width: '98%',
    alignSelf: 'center',
    height: customWidth(80),
    paddingHorizontal: customWidth(25),
  }
});
