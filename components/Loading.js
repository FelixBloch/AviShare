import React, { useEffect  } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import * as firebase from 'firebase';

const Loading = (props) => {
    navigationOptions = { title: 'Loading', };

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            props.navigation.navigate(user ? 'Home' : 'Login')
        })
    }, []);

    return (
        <View style={styles.container}>
            <Text style={{ color: '#e93766', fontSize: 40 }}>Loading</Text>
            <ActivityIndicator color='#e93766' size="large" />
        </View>
    )
}

Loading.navigationOptions = ({ navigate }) => ({ title: 'Loading' });

export default Loading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
