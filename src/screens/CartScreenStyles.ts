import { ViewStyle, StyleSheet } from 'react-native';
interface Style{
    mainViewStyle:ViewStyle
}
export default StyleSheet.create<Style>({
    mainViewStyle: {flex: 1,  backgroundColor: '#1A202C'},
})