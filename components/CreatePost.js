import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { Input } from 'react-native-elements';
import * as firebase from 'firebase';

const CreatePost = (props) => {
    navigationOptions = { title: 'CreatePost', };

    const { navigate } = props.navigation;

    firebase.database().ref('items/')

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [location, setLocation] = useState('');

    savePost = () => {
        firebase.database().ref('items/').push(
            { 'title': title, 'text': text, 'location': location }
        );
        setTitle('');
        setText('');
        setLocation('');
        navigate('Home',);
    }

    return (
        <View>
            <Text>This is the Create Post page</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder={'Enter a Title'}
                value={title}
                onChangeText={title => setTitle(title)} />
            <TextInput
                style={{ height: 200, borderColor: 'gray', borderWidth: 1, }}
                multiline
                numberOfLines={4}
                placeholder={'What are your thoughts?'}
                value={text}
                onChangeText={text => setText(text)} />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, }}
                placeholder={'Enter a Location'}
                value={location}
                onChangeText={location => setLocation(location)} />
                <Button title={'SAVE POST'} onPress={ () => savePost()}/>
        </View>
    );
};

CreatePost.navigationOptions = ({ navigate }) => ({ title: 'Create a Post' });

export default CreatePost;
