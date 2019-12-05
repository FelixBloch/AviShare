import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import * as firebase from 'firebase';

const Post = (props) => {
    navigationOptions = { title: 'Post', };

    const { navigate } = props.navigation;

    return (
        <View>
            <Text>This is the Post page</Text>
        </View>
    );
};

Post.navigationOptions = ({ navigate }) => ({ title: 'Post' });

export default Post;
