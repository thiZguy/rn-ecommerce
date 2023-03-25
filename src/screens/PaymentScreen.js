import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { RESET_INITIAL_STATE } from '../redux/actionTypes';

const PaymentScreen = ({ }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => {
    const productsInCart = [];
    for (const productId in state.cart) {
      const quantity = state.cart[productId];
      const productById = state.products.find((product) => product.id === productId);
      productsInCart.push({ quantity, ...productById })
    }
    return productsInCart;
  });

  const handleCheckout = () => {
    setTimeout(() => {
      alert('Thanks for your buy!');
      // TBD
      // dispatch({type: RESET_INITIAL_STATE});
      navigation.reset({
        index: 0,
        routes: [{ name: 'Products' }],
      });
    }, 1000);
  };

  const totalPrice = cartItems.length > 0 ? cartItems.reduce((total, item) => total + item.price * item.quantity,0) : 0;

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text style={styles.cartItemName}>{item.name}</Text>
      <Text style={styles.cartItemPrice}>${item.price * item.quantity}</Text>
      <Text style={styles.cartItemQuantity}>x{item.quantity}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart Detail</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => <Text style={styles.emptyCart}>Your cart is empty.</Text>}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.total}>Total:</Text>
        <Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cartItemName: {
    flex: 1,
    fontSize: 16,
  },
  cartItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  cartItemQuantity: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: 16,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 16,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#035195',
    paddingVertical: 16,
    marginVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyCart: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 16,
  },
});

export default PaymentScreen;
