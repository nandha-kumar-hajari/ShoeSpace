import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Style from './AdminHomeStyles';
import {customWidth} from '../components/Styles';
import {CartCard, Header, ProductCard} from '../components';
import {useSelector, useDispatch} from 'react-redux';
import * as wpActions from '../redux/actions';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import {BagImg} from '../assets/images';

interface CartScreenProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
  route: NativeStackScreenProps<ParamListBase>;
}
export const CartScreen: React.FC<CartScreenProps> = ({
  navigation,
  route,
}: CartScreenProps) => {
  const dispatch = useDispatch();
  let reduxCart = useSelector(state => state.appData.cartData);
  const [listData, setListData] = useState([]);
  const [refreshList, setRefreshList] = useState(0);

  useEffect(() => {
    setListData(reduxCart);
  }, [refreshList]);
  const onPressDelete = item => {
    console.log('Item for delete', item);
    reduxCart.splice(
      reduxCart.findIndex(function (i) {
        return i.id === item.id;
      }),
      1,
    );
    setListData(reduxCart);
    setRefreshList(refreshList + 1);
  };

  const renderItem = ({item}: any) => {
    return (
      <CartCard itemData={item} onPressDelete={() => onPressDelete(item)} />
    );
  };

  return (
    <SafeAreaView style={Style.mainViewStyle}>
      <Header
        screenName="Cart"
        type="dark"
        onClickBack={() => navigation.goBack()}
      />
      <FlatList
        data={listData}
        extraData={reduxCart}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ListEmptyComponent={() => {
          return (
            <Text style={{color: '#fff',marginTop:customWidth(300)}}>
              Please add few products to the cart!
            </Text>
          );
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default CartScreen;
