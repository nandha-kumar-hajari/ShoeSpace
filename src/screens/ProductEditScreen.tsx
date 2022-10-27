import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Style from './ProductEditStyles';
import {customWidth} from '../components/Styles';
import {BackIcon} from '../assets/images';
import {Button} from '../components/index';
import {Header, TextField} from '../components';
import {ParamListBase, useFocusEffect} from '@react-navigation/native';
import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {useSelector, useDispatch} from 'react-redux';
import * as wpActions from '../redux/actions'

interface ProductEditScreenProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
  route: NativeStackScreenProps<ParamListBase>;
}
export const ProductEditScreen: React.FC<ProductEditScreenProps> = ({
  navigation,
  route,
}: ProductEditScreenProps) => {
  const dispatch = useDispatch();
  const productData = useSelector(state => state.appData.catalogProducts);
  const [brandName, setBrandName] = useState<string>('');
  const [productName, setProductName] = useState<string>('');
  const [price, setPrice] = useState<number>();
  const [imageUrl, setImageUrl] = useState<string>('');

  const onPressSaveProduct = () => {
    productData.push({
        id:productData.length,
        brandName:brandName,
        productName:productName,
        price:price,
        imageUrl
    })
    dispatch(wpActions.saveCatalogProducts(productData))
    navigation.goBack()

  };

  return (
    <SafeAreaView style={Style.mainViewStyle}>
      <Header
        screenName="Edit Product"
        onClickBack={() => navigation.goBack()}
      />

      <TextField
        label="Brand Name"
        onChangeText={(text: string) => setBrandName(text)}
      />

      <TextField
        label="Product Name"
        onChangeText={(text: string) => setProductName(text)}
      />

      <TextField
        label="Price (in ₹)"
        onChangeText={(text: number) => setPrice(text)}
      />

      <TextField
        label="Image URL"
        onChangeText={(text: string) => setImageUrl(text)}
      />

      <Button text="Submit" onPress={onPressSaveProduct} />
    </SafeAreaView>
  );
};

export default ProductEditScreen;
