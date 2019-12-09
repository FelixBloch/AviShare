import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Button, ListItem, Tile } from 'react-native-elements';
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
        setCurrentUser(firebase.auth());
    }, []);

    console.log(currentUser)

    if (!currentUser) {
        () => props.navigation.navigate('Login');
    } else if (posts.isEmpty()) {
        return (
            <Text>NOTHING TO SHOW HERE YET</Text>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <Button onPress={() => navigate('CreatePost')} title="Create a new Post" />
            <Text>
                Hi {currentUser && currentUser.email}!
            </Text>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    {
                        posts.map((l, i) => (
                            // <Tile
                            // key={i}
                            //     //imageSrc={require('./img/path')}
                            //     title={l.title}
                            //     icon={{ name: 'play-circle', type: 'font-awesome' }} // optional
                            //     contentContainerStyle={{ height: 70 }}
                            // >
                            //     <View
                            //         style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
                            //     >
                            //         <Text>{l.text}</Text>
                            //         <Text>{l.location}</Text>
                            //     </View>
                            // </Tile>


                            <ListItem
                                key={i}
                                title={l.title}
                                subtitle={l.text}
                                onPress={() => navigate('Post', l)}
                                bottomDivider
                                chevron
                            />

                        ))
                    }
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

Home.navigationOptions = ({ navigate }) => ({ title: 'Home' });

export default Home;