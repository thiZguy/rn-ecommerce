import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const MiniCart = ({ }) => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const cart = useSelector((state) => {
    const productsInCart = [];
    for (const productId in state.cart) {
      const quantity = state.cart[productId];
      const productById = state.products.find((product) => product.id === productId);
      productsInCart.push({ quantity, ...productById })
    }
    return productsInCart;
  });

  const totalPrice = cart.length > 0 ? cart.reduce((total, item) => total + item.price * item.quantity,0) : 0;

  const onPressOpacity = () => {
    setVisible(!visible);
  }

  const onHandleContinue = () => {
    onPressOpacity();
    if (cart.length > 0) {
      // NAVIGATE TO PAYMENT
      navigation.navigate('Payment')
    }
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPressOpacity}>
      <Text style={styles.cartTitle}>Shopping Cart</Text>
      { visible && (
        <View style={styles.cartItems}>
          {
          cart.length > 0 ? (
            <ScrollView style={styles.scrollView}>
           {
              cart.length > 0 &&
              cart.map((item) => (
                <View style={styles.item} key={item.id}>
                  <Text>
                    <Text style={styles.itemName}>{`${item.name} ${item.id.substring(item.id.length - 3)} \n`}</Text>
                    <Text style={styles.itemPrice}>
                      {`$${item.price * item.quantity}`}
                    </Text>
                  </Text>
                  <Text style={styles.itemQuantity}>
                    {`Qty: ${item.quantity}`}
                  </Text>
                </View>
              ))
           }
         </ScrollView>
          ) : (
            <Text style={styles.emptyText}>Your cart is empty</Text>
          )}
          {cart.length > 0 && (
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>Total:</Text>
              <Text style={styles.totalPrice}>${totalPrice}</Text>
            </View>
          )}
          <TouchableOpacity style={styles.continueButton} onPress={onHandleContinue}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#0494df',
    padding: 10,
    borderTopLeftRadius: 20,
    borderLeftWidth: 1,
    borderColor: '#ddd',
  },
  cartTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  cartItems: {
    maxHeight: 250,
    overflow: 'scroll',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 5,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f1f2f3'
  },
  itemPrice: {
    fontSize: 14,
  },
  itemQuantity: {
    fontSize: 16,
    color: '#d3d5d1',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ddd'
  },
  totalPrice: {
    fontSize: 18,
    color: '#ddd'
  },
  continueButton: {
    backgroundColor: '#035195',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  emptyText: {
    fontStyle: 'italic',
    color: '#e2e3e4',
  },
  scrollView: {
    padding: 10,
    maxHeight: 100,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'a1a2b4'
  },
});

export default MiniCart;
