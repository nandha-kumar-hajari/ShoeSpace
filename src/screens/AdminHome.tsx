import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Style from './AdminHomeStyles';
import {customWidth} from '../components/Styles';
import { ProductCard } from '../components';

export const AdminHome = () => {

  
  return (
    <SafeAreaView style={Style.mainViewStyle}>
      <View style={{alignSelf: 'flex-start', margin: customWidth(30)}}>
        <Text
          style={Style.mainTitleStyle}>
          Shoe Catalog
        </Text>
        <Text
          style={Style.subTitleStyle}>
          Available Products
        </Text>
      </View>

      <FlatList
      data={[1,2,3,4,5,6]}
      keyExtractor={(item,index)=>index.toString()}
      renderItem={ProductCard}
      showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default AdminHome;
