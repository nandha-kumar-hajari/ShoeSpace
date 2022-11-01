import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Styles from './ProductDetailsStyles';
import FastImage from 'react-native-fast-image';
import {customWidth} from '../components/Styles';
import {Button, Header} from '../components';
import {SharedElement} from 'react-navigation-shared-element';
import {useSelector, useDispatch} from 'react-redux';
import * as wpActions from '../redux/actions';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface ProductDetailsScreenProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
  route: NativeStackScreenProps<ParamListBase>;
}

const ProductDetailsScreen: React.FC<ProductDetailsScreenProps> = ({
  navigation,
  route,
}: ProductDetailsScreenProps) => {
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.appData.cartData);
  console.log('Route data', route);
  const paramData = route.params;
  const [buttonText, setButtonText] = useState('Add to Cart');
  useEffect(() => {
    function checkId(value: any) {
      return value.id == paramData.id;
    }
    var filteredData =
      cartData &&
      cartData.filter((item: any, index: number) => checkId(item)).length > 0;

    if (filteredData) {
      setButtonText('Go to Cart');
    }
  }, []);

  const onPressAddtoCart = () => {
    if (cartData && cartData.length > 0) {
      dispatch(wpActions.saveCartData([paramData, ...cartData]));
    } else {
      cartData&& cartData.push(paramData);
      dispatch(wpActions.saveCartData(cartData));
    }
    setButtonText('Go to Cart');
  };
  return (
    <SafeAreaView style={Styles.mainViewStyle}>
      <Header
        type="dark"
        screenName="Product Details"
        onClickBack={() => navigation.goBack()}
      />

      <SharedElement id={`${paramData.imageUrl}`}>
        <FastImage
          source={{uri: paramData.imageUrl}}
          resizeMode="cover"
          style={Styles.imageStyle}
        />
      </SharedElement>

      <View style={{marginVertical: customWidth(14), alignSelf: 'flex-start'}}>
        <Text style={Styles.brandTextStyle}>{paramData.brandName}</Text>
        <Text style={Styles.productNameStyle}>{paramData.productName}</Text>

        <Text style={Styles.descHeadingStyle}>Description:</Text>

        <Text style={Styles.descTextStyle}>{paramData.description}</Text>
      </View>

      <View style={Styles.bottomViewStyle}>
        <Text style={{fontFamily: 'Lato-Bold', fontSize: 26, color: '#000'}}>
          ₹ {paramData.price} /-
        </Text>

        <Button
          text={buttonText}
          buttonStyle={{
            width: customWidth(180),
            height: customWidth(60),
            backgroundColor: '#E96E35',
          }}
          textStyle={{color: '#fff'}}
          onPress={() =>
            buttonText === 'Add to Cart'
              ? onPressAddtoCart()
              : navigation.navigate('CartScreen')
          }
        />
      </View>
    </SafeAreaView>
  );
};

ProductDetailsScreen.sharedElements = route => {
  const paramData = route.params;

  return [
    {
      id: `${paramData.imageUrl}`,
      animation: 'move',
      resize: 'clip',
    },
  ];
};
export default ProductDetailsScreen;
