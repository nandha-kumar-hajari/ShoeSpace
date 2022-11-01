import {customWidth} from './../components/Styles';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
interface Style {
  mainViewStyle: ViewStyle;
  headerViewStyle:ViewStyle;
  mainTitleStyle: TextStyle;
  subTitleStyle: TextStyle;
  buttonStyle:ViewStyle;
}

export default StyleSheet.create<Style>({
  mainViewStyle: {flex: 1, alignItems: 'center', backgroundColor: '#1A202C'},
  mainTitleStyle: {
    fontFamily: 'Lato-Bold',
    color: 'white',
    fontSize: customWidth(34),
    alignSelf: 'flex-start',
    marginTop: customWidth(40),
  },
  subTitleStyle: {
    fontFamily: 'Lato-Bold',
    color: '#fff',
    fontSize: customWidth(18),
    alignSelf: 'flex-start',
    marginTop: customWidth(10),
  },
  headerViewStyle:{
    width:'86%',
    flexDirection: 'row',
    alignItems:'center',
    marginVertical:customWidth(14),
    justifyContent:'space-between'
  },
  buttonStyle:{
    backgroundColor: '#FE8953',
    borderRadius: 22,
    height:customWidth(50),
    width:customWidth(50),
    alignItems: 'center',
    justifyContent: 'center',
  }
});
