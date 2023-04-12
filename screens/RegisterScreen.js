import { KeyboardAvoidingView, StatusBar, StyleSheet, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { Input, Text, Button } from 'react-native-elements';
import { auth } from '../firebase';
const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Login"
        });
    }, [navigation]);
    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                authUser.user.update({
                    displayName: name,
                    photoURL: imageUrl ||
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtgTmbfWHLbknlysuGvXtkxkeIug3B2ABkDjhniQY&s"
                })
            })
            .catch((error) => alert(error.message));
    }
    return (
        <KeyboardAvoidingView behavior='margin' style={styles.container}>
            <StatusBar style="light" />
            <Text h3 style={{ marginBottom: 50 }}>Create a Signal account</Text>
            <View style={styles.innerContainer}>
                <Input placeholder="Full Name"
                    autoFocus
                    type="text"
                    value={name}
                    onChange={(text) => setName(text)} />

                <Input placeholder="Email"
                    type="text"
                    value={email}
                    onChange={(text) => setEmail(text)} />

                <Input placeholder="Password"
                    type="text"
                    value={password}
                    secureTextEntry
                    onChange={(text) => setPassword(text)} />

                <Input placeholder="Profile Picture Url"
                    type="text"
                    value={imageUrl}
                    onChange={(text) => setImageUrl(text)}
                    onSubmitEditing={register} />
            </View>
            <Button
                containerStyle={styles.button}
                title='Register'
                raised
                onPress={register} />
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },
    button: {
        width: 200,
        marginTop: 10
    },
    innerContainer: {
        width: 300,
    }
})