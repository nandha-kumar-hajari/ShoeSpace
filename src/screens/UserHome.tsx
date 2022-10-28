import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Style from './AdminHomeStyles';
import {customWidth} from '../components/Styles';
import {ProductCard} from '../components';
import {useSelector, useDispatch} from 'react-redux';

export const UserHome = () => {
  const productsFromRedux = useSelector(state => state.appData.catalogProducts);


  const renderItem = ({item}) =>{
    return(
      <ProductCard itemData={item}/>
    )
  }

  return (
    <SafeAreaView style={Style.mainViewStyle}>
      <View style={{alignSelf: 'flex-start', margin: customWidth(30)}}>
        <Text style={Style.mainTitleStyle}>Shoe Catalog</Text>
        <Text style={Style.subTitleStyle}>Available Products</Text>
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

export default UserHome;
