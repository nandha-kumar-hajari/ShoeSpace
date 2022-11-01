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
import {DeleteImg} from '../assets/images';
import FastImage from 'react-native-fast-image';
interface CartCardProps {
  onPressDelete: () => void;
  itemData: any;
}
export const CartCard: React.FC<CartCardProps> = ({
  onPressDelete,
  itemData,
}: CartCardProps) => {
  return (
    <View style={styles.cardViewStyle}>
      {/* ImageView */}
      <View style={styles.imageView}>
        <FastImage
          source={{
            uri: itemData.imageUrl ? itemData.imageUrl : '',
            priority: FastImage.priority.high,
          }}
          style={{height: 40, width: 40, zIndex: 2}}
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

          <TouchableOpacity onPress={onPressDelete} style={styles.deleteButtonStyle}>
            <Image
              style={{
                height: customWidth(25),
                width: customWidth(25),
                marginRight: 4,
              }}
              source={DeleteImg}
            />
            <Text
              style={{
                fontFamily: 'Lato-Regular',
                fontSize: 12,
                color: '#fff',
              }}>
              Delete
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  cardViewStyle: {
    backgroundColor: '#000',
    borderRadius: 8,
    width: customWidth(380),
    marginVertical: customWidth(10),
    paddingVertical: customWidth(30),
    paddingHorizontal: customWidth(20),
    flexDirection: 'row',
    //   alignItems: 'center',
  },
  imageView: {
    backgroundColor: '#1A202C',
    height: customWidth(60),
    width: customWidth(70),
    borderRadius: 3,
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
    marginTop: customWidth(50),
    width: customWidth(240),
    justifyContent: 'space-between',
  },
  deleteButtonStyle: {
    backgroundColor: '#BA3430',
    paddingVertical: customWidth(5),
    paddingHorizontal: customWidth(10),
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    ...shadowStyles,
  },
});
