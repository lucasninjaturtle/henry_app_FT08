/* import React from 'react'
import {View, Text, Button} from 'native-base'
import {Image} from 'react-native'
import {StyleSheet} from 'react-native'
import henryLogo from '../../assets/logo_henry.png'

const Login = (props) => {

    function simulateLogin() {
        console.log("Login!")
        props.test(true)
    }

    return (
        <View style={styles.view}>
            <Image
                source = {henryLogo}
                style={styles.img}
                
            />
            <Button onPress={simulateLogin} style={styles.btn}>
                <Text>
                    Ingresar con Github!
                </Text>
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
})

export default Login; */

import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import {View, Text, Button} from 'native-base'
import {Image} from 'react-native'
import {StyleSheet} from 'react-native'
import henryLogo from '../../assets/logo_henry.png'
import { AuthSession } from 'expo';

WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint: 'https://github.com/login/oauth/access_token',
  revocationEndpoint: 'https://github.com/settings/connections/applications/<CLIENT_ID>',
};

const Login = (props) => {
    /* const [request, response, promptAsync] = useAuthRequest({
        clientId: '4cf64d15fe0157927482',
        scopes: ['identity'],
        // For usage in managed apps using the proxy
        redirectUri: makeRedirectUri({
        // For usage in bare and standalone
        native: 'your.app://redirect',
        }),
    }, discovery);

    React.useEffect(() => {
    if (response?.type === 'success') {
    const { code } = response.params;
    }
    }, [response]); */

    const github = {
        id: '4cf64d15fe0157927482',
        secret: '29f49913d133a27236e1021e860edd797d398d51'
    };
    const githubFields = ['user', 'public_repo'];

    /* // 1
    const { access_token } = await createTokenWithCode(params.code);
    async function createTokenWithCode(code) {
        // 2
        const url =
        `https://github.com/login/oauth/access_token` +
        `?client_id=${github.id}` +
        `&client_secret=${github.secret}` +
        `&code=${code}`;
        // 3
        const res = await fetch(url, {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
        });
        return res.json();
    }

    const credential = firebase.auth.GithubAuthProvider.credential(token);
    const user = await firebase.auth().signInAndRetrieveDataWithCredential(credential); */

    const REDIRECT_URL = AuthSession.getRedirectUrl();
    
    async function simulateLogin() {
        console.log("Login!")
        //props.test(true)
        // promptAsync();
        // 1
        const { params } = await AuthSession.startAsync({
            authUrl: authUrlWithId(github.id, githubFields),
        });
        // 2
        function authUrlWithId(id, fields) {
            return (
                `https://github.com/login/oauth/authorize` +
                `?client_id=${id}` +
                `&redirect_uri=${encodeURIComponent(REDIRECT_URL)}` +
                // 3
                `&scope=${encodeURIComponent(fields.join(' '))}`
            );
        }
    }

    return (
        <View style={styles.view}>
            <Image
                source = {henryLogo}
                style={styles.img}
                
            />
            <Button disabled={!request}
            onPress={simulateLogin} style={styles.btn}>
                <Text>
                    Ingresar con Github!
                </Text>
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
})

export default Login;