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
interface ProductCardProps {
  forUser?: boolean;
  onPress?: () => void;
  itemData: any;
}
export const ProductCard: React.FC<ProductCardProps> = ({
  forUser,
  onPress,
  itemData,
}: ProductCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardViewStyle}>
      {/* ImageView */}
      <View style={styles.imageView}>
        <FastImage
          source={{
            uri: itemData.imageUrl ? itemData.imageUrl : '',
            priority: FastImage.priority.high,
          }}
          style={{height: 80, width: 80, zIndex: 2}}
        />
      </View>

      {/* Information View */}
      <View style={styles.infoViewStyle}>
        <Text style={styles.brandTitleStyle}>
          {itemData.brandName ? itemData.brandName : ''}
        </Text>
        <Text numberOfLines={2} style={styles.productTitleStyle}>
          {itemData.productName ? itemData.productName : ''}
        </Text>

        <View style={styles.bottomDetailView}>
          <Text style={styles.brandTitleStyle}>
            ₹{itemData.price ? itemData.price : ''}/-
          </Text>
          {forUser ? (
            <TouchableOpacity style={styles.cartIconStyle}>
              <Image
                style={{height: customWidth(25), width: customWidth(25)}}
                source={AddToCartImg}
              />
            </TouchableOpacity>
          ) : null}
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
