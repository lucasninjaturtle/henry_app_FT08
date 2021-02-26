import React from 'react'
import {View, Text, Button} from 'native-base'
import {Image} from 'react-native'
import {StyleSheet} from 'react-native'
import henryLogo from '../../assets/logo_henry.png'

const Login = () => {

    function simulateLogin() {
        console.log("Login!")
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

export default Login;