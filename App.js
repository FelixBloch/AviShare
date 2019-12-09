import React, { useState, } from 'react';
import { Text, View } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import * as firebase from 'firebase';

import Home from './components/Home';
import Settings from './components/Settings';
import Profile from './components/Profile';
import Post from './components/Post';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Register from './components/Register';
import Loading from './components/Loading';

const App = (props) => {
  const firebaseConfig = {
    apiKey: "API KEY",
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
  },
    // {
    //   defaultNavigationOptions: {
    //     headerTintColor: '#fff',
    //     headerStyle: { backgroundColor: 'gray', },
    //   },
    //   //navigationOptions: { tabBarLabel: 'Home!', },
    // },
    {
      headerMode: 'none',
    },
  );

  const AppContainer = createAppContainer(AppNavigator);

  return (
    <>
      <Header
        leftComponent={ <Icon name="menu" color="#fff" /> } //onPress={() => navigation.navigate('DrawerToggle')}
        centerComponent={{ text: 'AviShare', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' } }
      />
      <AppContainer />
    </>
  );
}
<<<<<<< HEAD

export default App;
=======
>>>>>>> 36e973444c40a033c367cc0efa901e4d964eebe5
