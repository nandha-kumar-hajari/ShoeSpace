import {customWidth} from './../components/Styles';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
interface Style {
  mainViewStyle: ViewStyle;
  mainTitleStyle: TextStyle;
  subTitleStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  mainViewStyle: {flex: 1, alignItems: 'center', backgroundColor: '#1A202C'},
  mainTitleStyle: {
    fontFamily: 'Lato-Bold',
    color: 'white',
    fontSize: customWidth(50),
    alignSelf: 'flex-start',
    marginTop: customWidth(40),
  },
  subTitleStyle: {
    fontFamily: 'Lato-Bold',
    color: '#fff',
    fontSize: customWidth(22),
    alignSelf: 'flex-start',
    marginTop: customWidth(10),
  },
});
