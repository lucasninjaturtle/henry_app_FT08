import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { View, Text, Button } from 'native-base'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'
import henryLogo from '../../assets/logo_henry.png'
import axios from 'axios';
import { AuthSession } from 'expo';
import { Alert } from "react-native"
import { useDispatch } from 'react-redux'
import { getUserInfo } from '../../Redux/Actions/userActions';
import store from '../../Redux/store';
import envTrucho from '../../envTrucho.js'


WebBrowser.maybeCompleteAuthSession();

const discovery = {
    authorizationEndpoint: "https://github.com/login/oauth/authorize",
    tokenEndpoint: "https://github.com/login/oauth/access_token",
    revocationEndpoint:
        "https://github.com/settings/connections/applications/<CLIENT_ID>"
};

const Login = (props) => {
    console.log(envTrucho)
    const dispatch = useDispatch();
    const [request, response, promptAsync] = useAuthRequest(
        {
            clientId: `cef2e2e9046dc933c7c9`,
            clientSecret: `13bd39577a7c1de81ef937fa2a7ed81587bbff81`,
            scopes: ["user", "repo"],
            redirectUri: makeRedirectUri({
                native: `exp://192.168.100.13:19000`
            })
        },
        discovery
    );

    React.useEffect(() => {
        console.log(process.env);
        if (response?.type === "success") {
            console.log(response.type);
            console.log("Respuesta de GH  ", response.params);
            const { code } = response.params;
            if (code) {
                axios
                    .post(`http://192.168.100.13:5000/auth/githubcode`, {
                        client_id: `cef2e2e9046dc933c7c9`,
                        client_secret: `13bd39577a7c1de81ef937fa2a7ed81587bbff81`,
                        code: code
                    })
                    .then((getUserToken) => {
                        axios
                            .get("https://api.github.com/user", {
                                headers: {
                                    Authorization: `Bearer ${getUserToken.data}`
                                }
                            })
                            .then((getGHUser) => {
                                axios
                                    .post(
                                        `http://192.168.100.13:5000/auth/githubUser`,
                                        {
                                            data: getGHUser.data.login
                                        }
                                    )
                                    .then(() => {
                                        console.log('data.login :', getGHUser.data.login)
                                        dispatch(getUserInfo(getGHUser.data.login))
                                        props.test(true);
                                    })
                                    .catch((err) => {
                                        Alert.alert("Error FATAL", "No existe ese usuario", [
                                            { text: "OK", onPress: () => console.log("OK Pressed") }
                                        ]);
                                    });
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    })
                    .catch((err) => {
                        console.log("err", err);
                    });
            }
        }
    }, [response]);

    return (
        <View style={styles.view}>
            <Image source={henryLogo} style={styles.img} />
            <Button
                onPress={() => {
                    promptAsync();
                }}
                style={styles.btn}
            >
                <Text>Ingresar con Github!</Text>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#f7f701"
    },
    img: {
        width: "90%",
        height: 161,
        resizeMode: "contain",
        marginTop: 100
    },
    btn: {
        alignSelf: "center",
        marginTop: 100
    }
});

export default Login;
