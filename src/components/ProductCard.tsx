import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {customHeight, customWidth, shadowStyles} from './Styles';
import {AddToCartImg} from '../assets/images';
import FastImage from 'react-native-fast-image';
export const ProductCard = () => {
  return (
    <TouchableOpacity style={styles.cardViewStyle}>
      {/* ImageView */}
      <View style={styles.imageView}>
        <FastImage
          source={{
            uri: 'https://i.ibb.co/pZX5Vy8/puma.png',
            priority: FastImage.priority.high,
          }}
          style={{height: 80, width: 80, zIndex: 2}}
        />
      </View>

      {/* Information View */}
      <View style={styles.infoViewStyle}>
        <Text style={styles.brandTitleStyle}>NIKE</Text>
        <Text numberOfLines={2} style={styles.productTitleStyle}>
          Downshifter Running Shoes for Men
        </Text>

        <View style={styles.bottomDetailView}>
          <Text style={styles.brandTitleStyle}>₹999/-</Text>

          <TouchableOpacity style={styles.cartIconStyle}>
            <Image
              style={{height: customWidth(25), width: customWidth(25)}}
              source={AddToCartImg}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardViewStyle: {
    backgroundColor: '#000',
    borderRadius: 13,
    width: customWidth(410),
    marginVertical: customWidth(10),
    padding: customWidth(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageView: {
    backgroundColor: '#1A202C',
    height: customWidth(120),
    width: customWidth(130),
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoViewStyle: {height: customWidth(120), paddingHorizontal: customWidth(15)},
  brandTitleStyle: {
    fontFamily: 'Lato-Bold',
    fontSize: 15,
    color: '#fff',
  },
  productTitleStyle: {
    fontFamily: 'Lato-Regular',
    fontSize: 13,
    color: '#fff',
    maxWidth: customWidth(210),
  },
  bottomDetailView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: customWidth(30),
    justifyContent: 'space-between',
  },
  cartIconStyle: {
    backgroundColor: '#6C7EE3',
    padding: customWidth(6),
    borderRadius: 100,
    ...shadowStyles,
  },
});
