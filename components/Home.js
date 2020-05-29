import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Header, Icon, Button, ListItem, Tile } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
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
        setCurrentUser(firebase.auth().currentUser);
    }, []);

    console.log(currentUser)

    if (!currentUser) {
        () => props.navigation.navigate('Login');
    } else if (/*posts.isEmpty()*/ posts && posts.length < 0) {
        return (
            <Text>NOTHING TO SHOW HERE YET</Text>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <Header
                leftComponent={<Icon name='menu' color='#fff' onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())} />} //
                centerComponent={{ text: 'AviShare', style: { color: '#fff' } }}
                rightComponent={<Icon name='home' color='#fff' onPress={() => navigate('Home')} />}
            />
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
            <Button onPress={() => firebase.auth().signOut()} title="Sign out" />
        </View>
    );
};

Home.navigationOptions = ({ navigate }) => ({ title: 'Home' });

export default withNavigation(Home);