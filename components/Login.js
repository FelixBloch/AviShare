import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button,  } from 'react-native-elements';
import * as firebase from 'firebase';

const Login = (props) => {
    navigationOptions = { title: 'Login', };

    const { navigate } = props.navigation;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const handleLogin = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => navigate('Home'))
            .catch(error => setErrorMessage({ errorMessage: error.message }))
    }

    return (
        <View>
            <Text style={{ color: '#e93766', fontSize: 40 }}>Login</Text>
            {errorMessage &&
                <Text style={{ color: 'red' }}>
                    {errorMessage}
                </Text>}
            <TextInput
                autoCapitalize="none"
                placeholder="Email"
                onChangeText={email => setEmail(email)}
                value={email}
            />
            <TextInput
                secureTextEntry
                autoCapitalize="none"
                placeholder="Password"
                onChangeText={password => setPassword(password)}
                value={password}
            />
            <Button title="Login" color="#e93766" onPress={handleLogin} />
            <View>
                <Text>
                    Don't have an account?
                    <Text onPress={() => navigate('Register')} style={{ color: '#e93766', fontSize: 18 }}>
                        Sign Up
                    </Text>
                </Text>
            </View>
        </View>
    )
}

Login.navigationOptions = ({ navigate }) => ({ title: 'Login' });

export default Login;
