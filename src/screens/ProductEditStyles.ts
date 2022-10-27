import {StyleSheet, ViewStyle} from 'react-native';
interface Style {
  mainViewStyle: ViewStyle;
}

export default StyleSheet.create<Style>({
  mainViewStyle: {flex: 1, alignItems: 'center', backgroundColor: '#f2f2f2'},
});
