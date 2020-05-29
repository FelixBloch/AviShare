import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';

const Settings = (props) => {
    navigationOptions = { title: 'Settings',};

    const { navigate } = props.navigation;

    return (
        <View>
            <Header
                leftComponent={<Icon name='menu' color='#fff' onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())} />} //
                centerComponent={{ text: 'AviShare', style: { color: '#fff' } }}
                rightComponent={<Icon name='home' color='#fff' onPress={() => navigate('Home')} />}
            />
            <Text>This is the Settings page</Text>
        </View>
    );
};

Settings.navigationOptions = ({navigate}) => ({title: 'Settings'});

export default withNavigation(Settings);