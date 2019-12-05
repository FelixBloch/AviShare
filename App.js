import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createDrawerNavigator, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { DrawerItems } from 'react-navigation';
import { Button, ThemeProvider, Header, ListItem } from 'react-native-elements';
import * as firebase from 'firebase';

import Home from './components/Home';
import Settings from './components/Settings';
import Profile from './components/Profile';
import Post from './components/Post';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import Register from './components/Register';
import Loading from './components/Loading';

export default function App() {
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
    Loading: { screen: Loading, },
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

  // const DrawerNavigator = createDrawerNavigator({
  //   Settings: { screen: Settings },
  //   Profile: { screen: Profile },
  // },
  //   {
  //     drawerPosition: 'left',
  //     contentComponent: CustomDrawerNavigation,
  //     drawerOpenRoute: 'DrawerOpen',
  //     drawerCloseRoute: 'DrawerClose',
  //     drawerToggleRoute: 'DrawerToggle',
  //     drawerWidth: (width / 3) * 2
  //   }
  // );

  const AppContainer = createAppContainer(AppNavigator);

  return (
    <>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        // leftComponent={<Icon name='menu' /*color='#fff'*/ onPress={() => props.navigation.openDrawer()} />}
        centerComponent={{ text: 'AviShare', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <AppContainer />
    </>
  );
}