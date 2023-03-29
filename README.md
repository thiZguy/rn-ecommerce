# Drake e-commerce React Native App
<img src="https://raw.githubusercontent.com/thiZguy/rn-ecommerce/master/resources/home_ss.png" width="125">
<img src="https://raw.githubusercontent.com/thiZguy/rn-ecommerce/master/resources/payment_ss.png" width="125">
<img src="https://raw.githubusercontent.com/thiZguy/rn-ecommerce/master/resources/details_ss.png" width="125">

## Description

	This is a basic showcase e-commerce React Native App done with the use of react-navigation and redux, please any question don't hesitate to reach out

	The UI works by displaying a list of products on the ProductsScreen, which are fetched from an API and stored in the Redux store using the SET_PRODUCTS action.
	
	Each product has a name, image, price, id, amiiboSeries, and gameSeries. Clicking on a product takes the user to the ProductDetailsScreen, which displays more information about the product, including its quantity in the cart. The user can add or remove the product from the cart using the + and - buttons. The MiniCart component displays a list of products in the cart, including their name, price, and quantity. The user can proceed to the PaymentScreen to complete the purchase, which displays a message thanking the user for their buy and resets the navigation to the ProductsScreen. 
	
	The state of the cart and products is managed using Redux. The metro.config.js file is used to configure the transformation options for the Metro bundler.

## Installation
 0. A very important thing to have in my is to have the proper SDK installed depending your OS and your phone target platform (Android or iOS), I've been developing for Android in windows so I followed this guide: [Android SDK setup for React Native](https://reactnative.dev/docs/environment-setup#android-sdk)
 for iOS the case would be: [iOS guide](https://reactnative.dev/docs/environment-setup?platform=ios&os=macos#installing-dependencies)

 1. Install nodejs, react native CLI in your computer, yarn is preferable because is what I've been relying in the development stage.
 2. Clone the repository in any dir of preference
 3. Run `yarn install` or `npm install` in the root project folder
 4. First you need to run `npx react-native start` to run the metro bundler
 5. Run `yarn react-native run-android` or `npx run android`
 6. You can use the app now

## What are the products?
	The "products" are Super Smash Bros Characters, the prices are randomly assignated in app runtime.

## Structure:
	The application is a react-navigation "stack" that wraps 3 main screens and also involves a component (the cart component).

### DISCLAIMER
	This is only a showcase demo for my portfolio,
	I do not own any of the images or characters show in this demo, all the trade rights of those goes to NINTENDO.