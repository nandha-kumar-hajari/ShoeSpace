import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Style from './UserHomeStyles';
import {customWidth} from '../components/Styles';
import {ProductCard} from '../components';
import {useSelector, useDispatch} from 'react-redux';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import { BagImg } from '../assets/images';

interface UserHomeProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
  route: NativeStackScreenProps<ParamListBase>;
}
export const UserHome: React.FC<UserHomeProps> = ({
  navigation,
  route,
}: UserHomeProps) => {
  const productsFromRedux = useSelector((state) => state.appData.catalogProducts);

  const renderItem = ({item}) => {
    return (
      <ProductCard
        itemData={item}
        onPress={() => navigation.navigate('ProductDetailsScreen', item)}
      />
    );
  };

  return (
    <SafeAreaView style={Style.mainViewStyle}>

<View style={Style.headerViewStyle}>
        <View>
          <Text style={Style.mainTitleStyle}>Welcome User!</Text>
          <Text style={Style.subTitleStyle}>Browse Available Products</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('CartScreen')}
          style={Style.buttonStyle}>
          <Image
            style={{height: customWidth(24), width: customWidth(24)}}
            source={BagImg}
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

export default UserHome;
