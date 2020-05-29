import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { Header, Icon, Input } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import * as firebase from 'firebase';

const CreatePost = (props) => {
    navigationOptions = { title: 'CreatePost', };

    const { navigate } = props.navigation;

    firebase.database().ref('items/')

    const [author, setAuthor] = useState(null);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState(null);
    const [url, setURL] = useState('');
    const [progress, setProgress] = useState(0);

    savePost = () => {
        setAuthor(firebase.auth().currentUser);
        firebase.database().ref('items/').push(
            { 'author': author.email, 'title': title, 'text': text, 'location': location }
        );
        setTitle('');
        setText('');
        setLocation('');
        navigate('Home',);
    }

    return (
        <View>
            <Header
                leftComponent={<Icon name='menu' color='#fff' onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())} />} //
                centerComponent={{ text: 'AviShare', style: { color: '#fff' } }}
                rightComponent={<Icon name='home' color='#fff' onPress={() => navigate('Home')} />}
            />
            <Text>Share your experience with us</Text>
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
                placeholder={'Enter a Location (e.g. Street, City)'}
                value={location}
                onChangeText={location => setLocation(location)} />
                <Button title={'SAVE POST'} onPress={ () => savePost()}/>
        </View>
    );
};

CreatePost.navigationOptions = ({ navigate }) => ({ title: 'Create a Post' });

export default withNavigation(CreatePost);
