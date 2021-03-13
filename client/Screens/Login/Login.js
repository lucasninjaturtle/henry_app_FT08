import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { View, Text, Button, Item, Input } from 'native-base'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'
import henryLogo from '../../assets/logo_henry.png'
import axios from 'axios';
import { WebView } from 'react-native-webview';
import { AuthSession } from 'expo';

WebBrowser.maybeCompleteAuthSession();

const discovery = {
    authorizationEndpoint: 'https://github.com/login/oauth/authorize',
    tokenEndpoint: 'https://github.com/login/oauth/access_token',
    revocationEndpoint: 'https://github.com/settings/connections/applications/<CLIENT_ID>',
};

const Login = (props) => {
    const [request, response, promptAsync] = useAuthRequest({
        clientId: '4cf64d15fe0157927482',
        clientSecret: "29f49913d133a27236e1021e860edd797d398d51",
        scopes: ['user', 'repo'],
        // scopes: ['identity', 'notifications', 'user:email', 'read:org', 'repo'],
        // For usage in managed apps using the proxy
        redirectUri: makeRedirectUri({
            // For usage in bare and standalone
            // native: 'your.app://redirect',
            native: 'exp://192.168.0.145:19000',
        }),
    }, discovery);



    React.useEffect(() => {
        if (response?.type === 'success') {
            console.log(response.type)
            console.log("Respuesta de GH  ", response.params)
            const { code } = response.params;
            if (code) {
                const data = {
                    'client_id': '4cf64d15fe0157927482',
                    'client_secret': '29f49913d133a27236e1021e860edd797d398d51',
                    'code': code
                };
                axios.post('http://192.168.0.145:5000/auth/githubcode', data).then(resp => {
                    console.log(resp.data)
                        .then(axios)
                }).catch(err => {
                    console.log('err', err)
                });
                props.test(true);
            }
            // Obtener todos los datos del usuario (get maestro), y corroborar
            // si es la primera vez que ingresa, si no lo es, cargar datos,
            // y si lo es, crear relación con firebase (creandole un usuario)
            // Guardar todos los datos del usuario en redux, para mostrarlo facilmente
            // en el front
        }
    }, [response]);

    // function authLogin() {
    //     promptAsync();
    // }

    return (
        <View style={styles.view}>
            <Image
                source={henryLogo}
                style={styles.img}
            />
            {/* <Text style={{ padding: 15 }}>
                {JSON.stringify(response, null, 2)}
            </Text> */}
            <Button
                onPress={promptAsync()} style={styles.btn}>
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