
import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { View, Text, Button } from "native-base";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import henryLogo from "../../assets/logo_henry.png";
import axios from "axios";
import { AuthSession } from "expo";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../../Redux/Actions/userActions";
import store from "../../Redux/store";
import { envTrucho } from "../../envTrucho";

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: "https://github.com/login/oauth/authorize",
  tokenEndpoint: "https://github.com/login/oauth/access_token",
  revocationEndpoint:
    "https://github.com/settings/connections/applications/<CLIENT_ID>"
};

const Login = (props) => {
  const dispatch = useDispatch();
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: `${envTrucho.EXPO_CLIENT_ID}`,
      clientSecret: `${envTrucho.EXPO_CLIENT_SECRET}`,
      scopes: ["user", "repo"],
      redirectUri: makeRedirectUri({
        native: `${envTrucho.EXPO_NATIVE_URI}`
      })
    },
    discovery
  );

  React.useEffect(() => {
    console.log(process.env);
    if (response?.type === "success") {
      const { code } = response.params;
      async function asyncd() {
        if (code) {
          const userToken = await axios
            .post(`http://${envTrucho.EXPO_HTTP_IP}:5000/auth/githubcode`, {
              client_id: `${envTrucho.EXPO_CLIENT_ID}`,
              client_secret: `${envTrucho.EXPO_CLIENT_SECRET}`,
              code: code
            })
            .then((resp) => resp.data);

          const { login: ghUserName } = await axios
            .get("https://api.github.com/user", {
              headers: {
                Authorization: `Bearer ${userToken}`
              }
            })
            .then((resp) => resp.data);

          axios
            .post(`http://${envTrucho.EXPO_HTTP_IP}:5000/auth/githubUser`, {
              githubUserName: ghUserName
            })
            .then(({ data: userId }) => {
              dispatch(getUserInfo(userId)).then(() => {
                props.test(true);
              });
            })
            .catch((err) => {
              Alert.alert("Error FATAL", "No existe ese usuario", [
                { text: "OK", onPress: () => console.log("OK Pressed") }
              ]);
            });
        }
      }
      asyncd();
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
  );
};

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
