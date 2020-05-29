import React from 'react';
import {View, Text } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';

const DrawerNavigator = createDrawerNavigator({
    One: Home,
    Two: Profile,
    Three: Settings,
});

export default DrawerNavigator;