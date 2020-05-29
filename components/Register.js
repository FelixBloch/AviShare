import React, { useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { Header } from 'react-native-elements';
import * as firebase from 'firebase';

const Register = (props) => {
    navigationOptions = { title: 'Register', };

    const { navigate } = props.navigation;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorCode, setErrorCode] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => navigate('Home'))
            .catch(function(error) {
                setErrorCode(error.code)
                setErrorMessage(error.message)
            });
    }

    return (
        <View>
            <Header
                centerComponent={{ text: 'AviShare', style: { color: '#fff' } }}
            />
            <Text style={{ color: '#e93766', fontSize: 40 }}>Sign Up</Text>
                <Text style={{ color: 'red' }}>
                    {errorMessage}
                </Text>
            <TextInput
                placeholder="Email"
                autoCapitalize="none"
                onChangeText={email => setEmail(email)}
                value={email}
            />
            <TextInput
                secureTextEntry
                placeholder="Password"
                autoCapitalize="none"
                onChangeText={password => setPassword(password)}
                value={password}
            />
            <Button title="Sign Up" color="#e93766" onPress={handleSignUp} />
            <View>
                <Text> Already have an account? <Text onPress={() => navigate('Login')} style={{ color: '#e93766', fontSize: 18 }}> Login </Text></Text>
            </View>
        </View>
    )

}

Register.navigationOptions = ({ navigate }) => ({ title: 'Register' });

export default Register;