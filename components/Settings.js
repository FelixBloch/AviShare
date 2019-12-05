import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Settings = (props) => {
    navigationOptions = { title: 'Settings',};

    const { navigate } = props.navigation;

    return (
        <View>
            <Text>This is the Settings page</Text>
        </View>
    );
};

Settings.navigationOptions = ({navigate}) => ({title: 'Settings'});

export default Settings;