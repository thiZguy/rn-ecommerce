import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions';

export default function ProductDetailsScreen({ route, navigation }) {
  const dispatch = useDispatch();
  const { product: productParam } = route.params;

  const product = useSelector((state) => {
    let currentProduct = {...productParam, quantity: 0};
    // track current store changes
    if(!state.cart[productParam.id])
      return currentProduct;
    const quantity = state.cart[productParam.id];
    const productById = state.products.find((element) => element.id === productParam.id);
    currentProduct = { quantity, ...productById }
    return currentProduct;
  });

  const handleAddToCart = () => {
    dispatch(addToCart(product.id));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>{`${product.name} `}</Text>
        <Text style={styles.infoText}>{`${product.amiiboSeries} `}</Text>
        <Text style={styles.infoText}>{`${product.gameSeries} `}</Text>
        <Text style={styles.price}>{`Product price: $${product.price}`}</Text>
        <Text style={styles.price}>{`Quantity in cart: ${product.quantity}`}</Text>
        <View style={styles.quantityContainer}>
          <Text style={styles.actionText}>Action:</Text>
          <TouchableOpacity style={styles.button} onPress={handleRemoveFromCart}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  actionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    width: '20%',
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingVertical: 10,
    marginHorizontal: 10
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
