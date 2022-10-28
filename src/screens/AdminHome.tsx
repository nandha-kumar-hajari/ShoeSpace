import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AdminHomeProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
  route: NativeStackScreenProps<ParamListBase>;
}
export const AdminHome: React.FC<AdminHomeProps> = ({
  navigation,
  route,
}: AdminHomeProps) => {
  const productsFromRedux = useSelector(state => state.appData.catalogProducts);

  const renderItem = ({item}: any) => {
    console.log('Product item', item);
    return (
      <ProductCard
        itemData={item}
        onPress={() => navigation.navigate('ProductEditScreen', item)}
      />
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
        ListEmptyComponent={() => {
          return (
            <Text
              style={{
                color: '#fff',
                marginVertical: customWidth(300),
                fontFamily: 'Lato-Bold',
              }}>
              Please add products to continue
            </Text>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default AdminHome;
