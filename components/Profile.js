import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Profile = (props) => {
    navigationOptions = { title: 'Profile', };

    const { navigate } = props.navigation;

    return (
        <View>
            <Text>This is the Profile page</Text>
        </View>
    );
};

Profile.navigationOptions = ({ navigate }) => ({ title: 'Profile' });

export default Profile;