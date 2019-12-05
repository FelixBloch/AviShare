import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import * as firebase from 'firebase';

const Home = (props) => {
    navigationOptions = { title: 'Home', };

    const { navigate } = props.navigation;

    const [currentUser, setCurrentUser] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        firebase.database().ref('items/').on('value', snapshot => {
            const data = snapshot.val();
            const psts = Object.values(data);
            setPosts(psts);
        });
    }, []);

    // setCurrentUser(state);

    return (
        <View>
            <Button onPress={() => navigate('CreatePost')} title="Create a new Post" />
            <Text>
                Hi {currentUser && currentUser.email}!
            </Text>
            {
                posts.map((l, i) => (
                    <ListItem
                        key={i}
                        title={l.title}
                        subtitle={l.text}
                        onPress={() => navigate('Post')}
                        bottomDivider
                        chevron
                    />
                ))
            }
        </View>
    );
};

Home.navigationOptions = ({ navigate }) => ({ title: 'Home' });

export default Home;