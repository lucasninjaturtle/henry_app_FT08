import React, { useState } from 'react'
import 'react-native-gesture-handler';
import { Dimensions, Modal, StyleSheet, Linking } from 'react-native'
import { Input, Form, Label, Textarea, Item, Container, Header, Content, Badge, Text, Icon, View, List, ListItem, Left, Body, Right, Thumbnail, Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
import envTrucho from '../../envTrucho';

import { useSelector, useDispatch } from "react-redux";
import { getUserInfo } from "../../Redux/Actions/userActions";
import store from "../../Redux/store";




const width = Dimensions.get("window").width

const Auxilio = (props) => {
    let student = useSelector((store) => store.userInfo.usuario);

    const [token, setToken] = useState('');

    const handleInputChange = function (e) {
        // console.log(e.target)
        console.log(e.nativeEvent.text)
        setToken({
            ...token,
            token: e.nativeEvent.text
        });
        console.log(token)
    };

    const handleOnPress = () => {
        axios.put(`http://${EXPO_HTTP_IP}:5000/student/${student.id}`, {
            githubToken: token
        })
    };



    return (


        <View
            style={{
                flexDirection: "column",
                height: 150,
                padding: 0,
                top: 40,
            }}

        >
            <Thumbnail
                style={{ height: 50, width: 50 }}
                source={{
                    uri:
                        "https://png.pngitem.com/pimgs/s/252-2529729_picture-freeuse-explosion-like-text-bubbles-transprent-hd.png",
                }}
            />

            <Text>Ud. no posee un Token personal para ingresar</Text>

            <Form>
                <Item floatingLabel>
                    <Label>Ingrese su token personal</Label>
                    <Input
                        value={token}
                        onSubmit
                        onChange={handleInputChange}
                        style={{ borderBottomColor: 'black' }}
                        onPress={() => {
                            actToken();
                        }}
                    />
                </Item>
                <Button
                    onPress={handleOnPress}
                    style={{ alignSelf: 'center', marginTop: 30 }}
                >
                    <Text >Submit</Text>
                </Button>
            </Form>
            <Text>Para obtener su Token Personal de Github Ud. Debe:</Text>
            <List>
                <ListItem>
                    <Text>1- Dirigite a:  </Text>
                    <Text onPress={() => { Linking.openURL('https://github.com/') }} >https://github.com</Text>
                </ListItem>
                <ListItem>
                    <Text>2- Despliega la ventana de tu perfil (Arriba a la derecha), y selecciona la opcion "Settings"</Text>
                </ListItem>
                <ListItem>
                    <Text>3- Selecciona la opcion "Developer Settings" (Abajo a la izquierda)</Text>
                </ListItem>
                <ListItem>
                    <Text>3- Selecciona la opcion "Developer Settings" (Abajo a la izquierda)</Text>
                </ListItem>
                <ListItem>
                    <Text>4- Selecciona la opcion "Personal access token"</Text>
                </ListItem>
                <ListItem>
                    <Text>5- Genera un nuevo token con la opcion "Generate new token"</Text>
                </ListItem>
                <ListItem>
                    <Text>6- Sobre la note, simplemente pon "Henry App", y selecciona todos los checkboxes del scope "repo"</Text>
                </ListItem>
                <ListItem>
                    <Text>7 - Genera el nuevo token, copialo y pegalo arriba!</Text>
                </ListItem>
            </List>
        </View>

    )
}

export default Auxilio;