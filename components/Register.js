import React, { useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import * as firebase from 'firebase';

const Register = (props) => {
    navigationOptions = { title: 'Register', };

    const { navigate } = props.navigation;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => navigate('Home'))
            .catch(error => setErrorMessage({ errorMessage: error.message }))
            console.log(errorMessage)
    }


    return (
        <View>
            <Text style={{ color: '#e93766', fontSize: 40 }}>Sign Up</Text>
            {/* {errorMessage &&
                <Text style={{ color: 'red' }}>
                    {errorMessage}
                </Text>} */}
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