import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList } from 'react-native';
import { Header, Icon, Button, Tile } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import MapView, { Marker } from 'react-native-maps';
import * as firebase from 'firebase';

const Post = (props) => {
    navigationOptions = { title: 'Post', };

    const { navigate } = props.navigation;

    const { params } = props.navigation.state;
    const data = params;

    const [region, setRegion] = useState({
        latitude: 60.200692,
        longitude: 24.934302,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221,
    });

    useEffect(() => {
        const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + data.location + '&key=AIzaSyAvmih3snfv380ixdkGQ6QhVjMapZqUzWQ';
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                setRegion({
                    latitude: responseJson.results[0].geometry.location.lat,
                    longitude: responseJson.results[0].geometry.location.lng,
                    latitudeDelta: 0.0322,
                    longitudeDelta: 0.0221
                })
            })
            .catch((error) => {
                Alert.alert('Error', error);
            });
    }, []);

    return (
        <View>
            <Header
                leftComponent={<Icon name='menu' color='#fff' onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())} />} //
                centerComponent={{ text: 'AviShare', style: { color: '#fff' } }}
                rightComponent={<Icon name='home' color='#fff' onPress={() => navigate('Home')} />}
            />
            <View>
                <Tile
                    imageSrc={require('../assets/no_image_placeholder.jpg')}
                    title={data.title}
                    contentContainerStyle={{ height: 100 }}
                >
                    <Text>{data.author}</Text>
                    <View
                        style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
                    >
                        <Text>{data.text}</Text>
                    </View>

                </Tile>
            </View>
            <MapView
                style={{ height: 200 }}
                region={region}>
                <Marker
                    coordinate={{
                        latitude: region.latitude,
                        longitude: region.longitude
                    }}
                />
            </MapView>
        </View>
    );
};

Post.navigationOptions = ({ navigate }) => ({ title: 'Post' });

export default withNavigation(Post);
