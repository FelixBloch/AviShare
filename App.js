import React, { useState, } from 'react';
import { Dimensions } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as firebase from 'firebase';

import Home from './components/Home';
import Settings from './components/Settings';
import Profile from './components/Profile';
import Post from './components/Post';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Register from './components/Register';
import Loading from './components/Loading';
import DrawerNavigator from './components/DrawerNavigator';

const App = (props) => {
  const firebaseConfig = {
    apiKey: "AIzaSyCxIIXaMBnpMU5crd9tUBN6J4mcN-nuBg8",
    authDomain: "avishare-192ea.firebaseapp.com",
    databaseURL: "https://avishare-192ea.firebaseio.com",
    projectId: "avishare-192ea",
    storageBucket: "avishare-192ea.appspot.com",
    messagingSenderId: "379346241675",
  };

  firebase.initializeApp(firebaseConfig);

  const AppNavigator = createStackNavigator({
    Loading: { screen: Loading, },
    Home: { screen: Home, },
    Register: { screen: Register, },
    Login: { screen: Login, },
    Post: { screen: Post },
    CreatePost: { screen: CreatePost },
    Settings: { screen: Settings },
    Profile: { screen: Profile },
    Main: DrawerNavigator,
  },
    // {
    //   defaultNavigationOptions: {
    //     headerTintColor: '#fff',
    //     headerStyle: { backgroundColor: 'gray', },
    //   },
    {
      headerMode: 'none',
      
    },
    
  );

  const AppContainer = createAppContainer(AppNavigator);

  return (
    <>
      <AppContainer />
    </>
  );
}

export default App;
