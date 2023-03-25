import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions';
import { SET_PRODUCTS } from '../redux/actionTypes';
import Product from '../components/Product';

const API_URL = 'https://www.amiiboapi.com/api/amiibo/?amiiboSeries=Super Smash Bros.';

const ProductsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const products = data.amiibo.map((product) => ({
          name: product.character,
          image: product.image,
          price: Math.floor(Math.random() * 10000 + 1000) * 10,
          id: product.tail + product.name + product.head,
          amiiboSeries: product.amiiboSeries,
          gameSeries: product.gameSeries,
        }));
        dispatch({ type: SET_PRODUCTS, payload: products });
      });
  }, [dispatch]);

  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const renderItem = ({ item }) => (
     <Product
      id={item.id}
      name={item.name}
      image={item.image}
      price={item.price}
      quantity={cartItems[item.id] || 0}
      onAddToCart={() => handleAddToCart(item.id)}
      onRemoveFromCart={() => handleRemoveFromCart(item.id)}
      onPress={() => navigation.navigate('ProductDetails', {product: item})}
    />
  );

  return (
    <View style={styles.container}>
      {
        products.length > 0 &&
        <FlatList
          style={{ flex: 1, backgroundColor:'#f1f2f4', paddingHorizontal: 20 }}
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ProductsScreen;
