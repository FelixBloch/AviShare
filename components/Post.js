import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Tile } from 'react-native-elements';
import * as firebase from 'firebase';

const Post = (props) => {
    navigationOptions = { title: 'Post', };

    const { navigate } = props.navigation;

    const { params } = props.navigation.state;
    const data = params;

    return (
        <View>
            <Tile
                //imageSrc={require('./img/path')}
                title={data.title}
                contentContainerStyle={{ height: 100 }}
            >
                <View
                    style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
                >
                    <Text>{data.text}</Text>
                    <Text>{data.location}</Text>
                </View>
            </Tile>
        </View>
    );
};

Post.navigationOptions = ({ navigate }) => ({ title: 'Post' });

export default Post;
