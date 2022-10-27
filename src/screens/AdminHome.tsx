import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Style from './AdminHomeStyles';
import {customWidth} from '../components/Styles';
import {ParamListBase, useFocusEffect} from '@react-navigation/native';
import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {ProductCard} from '../components';
import {AddIcon} from '../assets/images';
import {useSelector, useDispatch} from 'react-redux';
import * as wpActions from '../redux/actions';

interface AdminHomeProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
  route: NativeStackScreenProps<ParamListBase>;
}
export const AdminHome: React.FC<AdminHomeProps> = ({
  navigation,
  route,
}: AdminHomeProps) => {
  const productsFromRedux = useSelector(state => state.appData.catalogProducts);

  const renderItem = () => {
    return (
      <ProductCard onPress={() => navigation.navigate('ProductEditScreen')} />
    );
  };

  return (
    <SafeAreaView style={Style.mainViewStyle}>
      <View style={Style.headerViewStyle}>
        <View>
          <Text style={Style.mainTitleStyle}>Welcome Admin!</Text>
          <Text style={Style.subTitleStyle}>Available Products</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('ProductEditScreen')}
          style={Style.buttonStyle}>
          <Image
            style={{height: customWidth(24), width: customWidth(24)}}
            source={AddIcon}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={productsFromRedux}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default AdminHome;
