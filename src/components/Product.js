import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Product = ({ id, name, image, price, quantity, onAddToCart, onRemoveFromCart, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.image} source={{ uri: image }} />
      </TouchableOpacity>
      <Text style={styles.title}>{`${name} ${id.substring(id.length - 3)}`} </Text>
      <Text style={styles.price}>${price}</Text>
      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={onRemoveFromCart} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity || 0}</Text>
        <TouchableOpacity onPress={onAddToCart} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginVertical: 20,
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 5
  },
  image: {
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
  },
  price: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#ccc',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 5,
  },
});

export default Product;
